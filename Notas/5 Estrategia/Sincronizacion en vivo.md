---
capa: 5 · Estrategia
tipo: sistema
fecha: 2026-10-20
---
# Sincronización en vivo con GitHub

Cómo el proyecto se mantiene al día en [GitHub](https://github.com/Marianafferrero/Studyhub_proyecto) sin depender de acordarse de subirlo. Vuelve a [[Inicio]] · Decisión en [[Registro de decisiones]].

| Quién cambia algo | Qué lo sube | Cada cuánto |
|---|---|---|
| Claude | `.claude/hooks/sincronizar_github.sh` (hook *Stop*) | Al terminar cada respuesta |
| Yo, en Obsidian | Plugin **Obsidian Git** | Cada 5 minutos, y trae cambios al abrir |
| GitHub Pages (demo) | GitHub | 1–2 minutos después de cada push |

**Lo que nunca se sube:** `Notas/Bitacora/` (la conversación cruda; el repo es público). El agente `cronista` destila lo importante en notas que sí se suben.

**Si algo falla:** Claude muestra un aviso en pantalla y lo anota en `.git/studyhub-sync.log`. Obsidian Git muestra su propio aviso.

> 🧠 Subir todo automáticamente también sube borradores a medio pensar. Es un trade-off aceptado: el historial de commits muestra el proceso, no solo el resultado.
