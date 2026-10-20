"""Cronista: anexa cada turno de la conversación con Claude a la bitácora del vault.

Uso como hook Stop: recibe el JSON del hook por stdin y anexa el último turno.
Uso manual:  python3 anexar_bitacora.py --todo <transcript.jsonl>  (anexa la sesión completa)
"""
import json, os, re, sys
from datetime import datetime

RAIZ = os.environ.get("CLAUDE_PROJECT_DIR") or os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CARPETA = os.path.join(RAIZ, "Notas", "Bitacora")
ESTADO = os.path.join(RAIZ, ".claude", ".bitacora_estado.json")
HERRAMIENTAS_QUE_ESCRIBEN = {"Write", "Edit", "NotebookEdit"}


def leer(transcript):
    with open(transcript, encoding="utf-8") as f:
        for linea in f:
            try:
                yield json.loads(linea)
            except ValueError:
                continue


def es_pedido(d):
    if d.get("type") != "user" or d.get("isMeta"):
        return False
    c = d.get("message", {}).get("content")
    return isinstance(c, str) and not c.startswith("[Request interrupted")


def limpiar(texto):
    texto = re.sub(r"<system-reminder>.*?</system-reminder>", "", texto, flags=re.S)
    return texto.strip()


def turnos(transcript):
    """Agrupa el transcript en turnos: pedido del usuario, respuesta final y archivos tocados."""
    actual = None
    for d in leer(transcript):
        if es_pedido(d):
            if actual:
                yield actual
            actual = {"id": d.get("uuid"), "hora": d.get("timestamp"), "pedido": limpiar(d["message"]["content"]),
                      "respuesta": "", "archivos": []}
        elif actual and d.get("type") == "assistant":
            for b in d.get("message", {}).get("content", []):
                if b.get("type") == "text" and b.get("text", "").strip():
                    actual["respuesta"] = b["text"].strip()
                    actual["fin"] = d.get("uuid")
                elif b.get("type") == "tool_use" and b.get("name") in HERRAMIENTAS_QUE_ESCRIBEN:
                    ruta = b.get("input", {}).get("file_path", "")
                    rel = os.path.relpath(ruta, RAIZ) if ruta.startswith(RAIZ) else ruta
                    if rel and rel not in actual["archivos"]:
                        actual["archivos"].append(rel)
    if actual:
        yield actual


def citar(texto):
    return "\n".join("> " + l if l else ">" for l in texto.splitlines())


def anexar(t):
    hora = datetime.fromisoformat(t["hora"].replace("Z", "+00:00")).astimezone() if t.get("hora") else datetime.now()
    os.makedirs(CARPETA, exist_ok=True)
    nota = os.path.join(CARPETA, hora.strftime("%Y-%m-%d") + ".md")
    nueva = not os.path.exists(nota)
    with open(nota, "a", encoding="utf-8") as f:
        if nueva:
            f.write(f"---\ncapa: 4 · Metacognición\ntipo: bitácora\nfecha: {hora:%Y-%m-%d}\n---\n"
                    f"# Bitácora {hora:%Y-%m-%d}\n\nRegistro automático de la conversación con Claude. "
                    f"Lo revisa el agente `auditor-proceso`. Vuelve a [[Inicio]].\n")
        f.write(f"\n## {hora:%H:%M} · Pedido\n\n{citar(t['pedido'])}\n\n### Respuesta de Claude\n\n{t['respuesta'] or '_(sin texto)_'}\n")
        if t["archivos"]:
            f.write("\n**Archivos tocados:** " + ", ".join(f"`{a}`" for a in t["archivos"]) + "\n")
    return nota


def cargar_estado():
    try:
        return json.load(open(ESTADO))
    except (OSError, ValueError):
        return {}


def main():
    if len(sys.argv) == 3 and sys.argv[1] == "--todo":
        transcript, solo_ultimo = sys.argv[2], False
    else:
        datos = json.load(sys.stdin)
        if datos.get("stop_hook_active"):
            return
        transcript, solo_ultimo = datos.get("transcript_path"), True
    if not transcript or not os.path.exists(transcript):
        return
    lista = [t for t in turnos(transcript) if t["respuesta"]]
    # En modo manual el último turno puede estar en curso: lo anexa el hook al terminar.
    lista = lista[-1:] if solo_ultimo else lista[:-1]
    estado = cargar_estado()
    hechos = set(estado.get("anexados", []))
    for t in lista:
        clave = f"{t['id']}:{t.get('fin')}"
        if clave in hechos:
            continue
        anexar(t)
        hechos.add(clave)
    estado["anexados"] = sorted(hechos)[-500:]
    json.dump(estado, open(ESTADO, "w"))


if __name__ == "__main__":
    main()
