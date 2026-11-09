---
capa: 3 · Decisiones
tipo: diseño de funcionalidad
fecha: 2026-11-08
estado: simulado en la demo
---
# Contenido de la IA

**Principio:** la IA de Studyhub solo trabaja con lo que el estudiante le entrega. Si no tiene material, lo dice y pide lo que le falta. No inventa contenido de una materia.

> 🧠 Esto es intención de diseño. No hay evidencia de usuarios todavía (ver [[Supuestos vs evidencia]]). La única señal relacionada es que María José tiene sus herramientas dispersas ([[Entrevistas]]).

## De dónde sale el contenido

| Fuente | Cómo entra | Peso |
|---|---|---|
| Notas del cuaderno | Automático, por materia | 1 por nota |
| Sesiones registradas | Automático | 2 por sesión |
| Archivos de herramientas conectadas | **El estudiante elige** con «Darle a la IA» | 3 por archivo |
| Archivos subidos | **El estudiante los sube** en una materia | 3 por archivo |

Conectar Canva o Word solo deja ver los nombres de los archivos. Que la IA lea uno es una decisión aparte, archivo por archivo. Se puede quitar cuando se quiera.

## Cuánto contenido necesita

| Nivel | Puntos | Qué puede hacer |
|---|---|---|
| Sin contenido | 0 | Solo un tablero vacío para llenar |
| Poco | 1–2 | Resumen y quiz corto, avisando que saldrá flojo |
| Suficiente | 3–5 | Resumen y quiz completo |
| Completo | 6 o más | Todo |

Los puntos son una regla inicial, sin validar. Hay que ajustarlos con el test de usabilidad.

## Qué le dice al estudiante

1. **Dice qué pasó:** «Todavía no tengo contenido de Fotografía, y un quiz sin tu material sería inventado».
2. **Dice qué falta, en concreto:** «Con un archivo o tres notas ya puedo hacerlo».
3. **Da la salida en un clic:** subir contenido, usar un archivo conectado de esa materia, o hacer un quiz corto con lo que hay.
4. **Cuando responde, cita:** «Basado en: tus notas · Sesión con María José».

## Cómo funcionaría de verdad (fuera del prototipo)

1. El archivo se sube a un servidor y se extrae su texto; las imágenes y PDF escaneados necesitan reconocimiento de texto.
2. El texto se parte en fragmentos y se guarda por estudiante y por materia.
3. Ante un pedido, se buscan los fragmentos relevantes y solo esos se envían al modelo de IA, con la instrucción de no responder fuera de ellos.
4. La respuesta cita los fragmentos usados.
5. Al quitar un archivo se borran sus fragmentos.

## Lo que queda abierto
- ¿Los puntos reflejan si el material sirve? Un archivo vacío hoy vale igual que uno de 40 páginas; lo real sería medir el texto extraído.
- Derechos de autor de lecturas y material de clase subido.
- Riesgo de que la IA reemplace el estudio en vez de apoyarlo ([[Preguntas abiertas]]).

Relacionado: [[Registro de decisiones]] · [[Limites y sesgos]]
