---
capa: 7 · Auditoría
tipo: auditoría
agente: auditor-proceso
fecha: 2026-10-20
alcance: cambios sin commit del 2026-10-20 (demo, README, notas de capas 3–6) y commits del día hasta db72f45
---
# Auditoría del proceso · 2026-10-20

Primera auditoría del vault: no hay una anterior en `Notas/7 Auditoria/`, así que la bitácora se revisó completa (`Notas/Bitacora/2026-10-20.md`). Vuelve a [[Inicio]] · [[Matriz de posibilidades]] · [[Sistema de agentes]].

> ⚠️ **Ojo, este informe es público.** La sincronización automática sube todo lo que no está en `.gitignore`, también esta nota. Por eso acá no se cita el contenido de la bitácora privada, solo la hora de cada entrada.

## Resumen

| # | Punto | Estado | En una línea |
|---|---|---|---|
| 1 | Trazabilidad | ⚠️ | 3 de las 5 filas nuevas del registro no enlazan evidencia de las capas 1 o 2; el informe de mejoras atribuye una cita a dos personas cuando es de una sola. |
| 2 | Honestidad de la evidencia | ⚠️ | No hay nada presentado como "validado". Pero la sesión en vivo y el modo Solo se apoyan en Mateo, una de las entrevistas dudosas, y la matriz le da 🟢 a P6. |
| 3 | Coherencia (PDF · README · notas · demo) | ❌ | El PDF sigue diciendo "plataforma de escritorio" y no tiene grupos, reportar ni sesión en vivo. Tres notas de las capas 1, 2 y 4 todavía dicen "solo hay match 1 a 1" y "nada del *durante*". |
| 4 | Bitácora | ⚠️ | La aprobación para implementar las mejoras no aparece en la bitácora; hay una promesa abierta (las 56 líneas de la demo que se subieron solas) y 50 preguntas sin respuesta. |
| 5 | Matriz | ✅ / ⚠️ | Refleja el informe de mejoras y su historial está al día. Quedan restos de la versión anterior en P5 y en el mapa impacto × esfuerzo. |
| 6 | Integridad del vault | ⚠️ | No hay enlaces rotos reales. Hay 2 notas vacías sin frontmatter y 2 notas sin enlaces entrantes. |
| 7 | Agentes y archivos originales | ⚠️ | Cambiaron la demo y el README (autorizado). Pero parte de la demo **se publicó sola en GitHub Pages a medio hacer**, antes de documentarla, y no pasó por el `critico-metacognitivo`. |

**Lo que sí está bien:** el código de la demo hace lo que dicen el README y el informe de mejoras (detalle en el punto 3). El script de la demo compila sin errores de sintaxis (revisado con JavaScriptCore). `index.html` y las carpetas `00`–`05` no se tocaron. Ninguna nota dice "validado" sobre algo nuevo, y el informe de mejoras declara confianza *media* y deja sus supuestos a la vista.

---

## 1. Trazabilidad ⚠️

Filas nuevas en `Notas/3 Decisiones/Registro de decisiones.md`:

| Línea | Decisión | Evidencia citada | Veredicto |
|---|---|---|---|
| 19 | Grupos de 3 o 4 | [[Brief del cliente]] · [[Las 3 capas de compatibilidad]] | ✅ Enlaza capas 1 y 2. |
| 20 | Reportar y bloquear, privacidad | "Hipótesis de confianza (sin evidencia)" | ⚠️ Es honesto, pero no tiene enlace. Debería apuntar a la fila "La confianza con desconocidos es una barrera" de [[Supuestos vs evidencia]] (línea 15, ⬜ sin evidencia). |
| 21 | Sesión en vivo con Pomodoro | [[Oportunidades de diseno]] · [[Entrevistas]] | ✅ Enlaza. Ver el punto 2 sobre qué entrevistas la sostienen. |
| 22 | La demo guarda el avance | — | ❌ Sin evidencia ni enlace. Es una decisión técnica, así que puede bastar con escribir "decisión técnica, sin evidencia de usuario" en vez de un guion. |
| 23 | Sincronización en vivo | Un commit y un script | ⚠️ Es infraestructura, no diseño: está bien que no cite usuarios. Pero no menciona que **Obsidian Git también sube cada 5 minutos**, que fue la otra mitad de esa decisión (bitácora, 18:46–19:04). |

Informe `Notas/6 Mejoras/2026-10-20 Mejoras implementadas en la demo.md`:
- ✅ Cada fila de la tabla (líneas 19–25) tiene una columna de evidencia, y en general enlaza.
- ⚠️ **Línea 21:** dice *Mateo y Juan Martín: "terminamos hablando"*. En [[Entrevistas]] (líneas 20 y 26) esa frase es **solo de Mateo**. Juan Martín dice otra cosa: que "le cuesta concentrarse en grupo" (línea 16). La idea es parecida, pero la cita no es de los dos.
- ⚠️ **Línea 23 (P7):** la evidencia es "requisito técnico". Coincide con la fila 22 del registro: no hay evidencia de usuario y conviene decirlo tal cual.
- ⚠️ **Línea 27:** "se recorrieron en el navegador los flujos… sin errores de JavaScript". No queda ningún rastro verificable (capturas, registro de consola). Esta auditoría solo pudo confirmar que el script no tiene errores de sintaxis. Es una afirmación de proceso sin respaldo.
- ⚠️ **Frontmatter (línea 3):** `pilar` no incluye P3, pero la tabla tiene una fila de P3 (línea 24).

Instrumentos en `Notas/6 Mejoras/Evidencia/`: ✅ los dos enlazan a [[Supuestos vs evidencia]] o [[Limites y sesgos]] y dejan claro que **todavía no se aplicaron**. `Guia de test de usabilidad.md` (línea 36) incluso pide "no completes respuestas que no se dieron". Bien.

## 2. Honestidad de la evidencia ⚠️

- ✅ Ninguna nota nueva usa "validado". `Preguntas abiertas.md` (línea 18) aclara "falta validarlo en el test".
- ⚠️ **Dependencia de una entrevista dudosa.** [[Limites y sesgos]] (línea 11) marca las respuestas de **Mateo** y María José como posiblemente simuladas, y le da **prioridad alta**. Aun así:
  - la sesión en vivo (informe de mejoras, línea 21) usa la frase de Mateo como cita principal;
  - el bloque Solo (línea 22) se apoya solo en [[Persona - Mateo]].
  Lo que sí se sostiene con entrevistas no marcadas como dudosas: Juan Martín y Valentina también hablan de la distracción en grupo ([[Entrevistas]], líneas 16 y 17). **Conviene citar a esas dos personas en vez de a Mateo.**
- ⚠️ **`Matriz de posibilidades.md`, línea 22:** P6 tiene evidencia 🟢 (fuerte). Se apoya en el "3 de 5 estudian solos", que según [[Limites y sesgos]] (línea 13) depende justo de la autenticidad de las entrevistas. Hasta que eso se confirme, debería ser 🟡.
- ⚠️ **`Preguntas abiertas.md`, línea 16:** la pregunta de grupos está marcada `[x]`, pero en [[Supuestos vs evidencia]] (línea 16) "prefieren grupos pequeños" sigue 🟡 con confianza baja, y el % grupal es un dato de ejemplo. Se respondió en el **diseño**, no con evidencia. Es aceptable, pero conviene escribir "respondida en el diseño, sin validar", como en la línea 18.

## 3. Coherencia ❌

### Demo comparada con lo que se documentó ✅
Se revisó el diff completo de la demo desde `c2dc8f8`: 217 líneas agregadas y 22 quitadas. Todo esto coincide con lo documentado:

| Lo que dicen el README o el informe | Dónde está en el código (`06 Demo…/Studyhub demo (abrir en el navegador).html`) | ✓ |
|---|---|---|
| Grupos de 3 o 4 con % grupal y capa más baja; crear y unirse | `GROUPS` L500; `mGroups()` L769; `joingroup` L1183; formulario `f-group` L1274 | ✅ |
| Reportar y bloquear desde el perfil y el chat | `vReport()` L1054; botón en el perfil L819 y en la cabecera del chat L873; bloqueados filtrados en resultados L788 | ✅ |
| Privacidad de la disponibilidad | radios L1000, guardado L1227 | ⚠️ ver abajo |
| Sesión en vivo: objetivo, Pomodoro 25/5 o 50/10, rondas, lista previa | `vLive()` L1070; `startLive()` L1088; temporizador L1092 | ✅ |
| Bloque de concentración Solo | `gosolo` → `startLive({solo:true})` | ✅ |
| Guarda en el navegador; "Cerrar sesión" lo reinicia | `localStorage` L572–573; `reset` L1139 (vuelve al estado inicial y lo guarda) | ✅ |
| Foco en las ventanas y Escape en reportar, calificar y "Más" | `nb.focus()` L1111; `keydown` L1295 | ✅ / ⚠️ |

Diferencias menores entre lo documentado y el código:
- ⚠️ **"Temporizador compartido"** (L895, pantalla de sesión confirmada): el temporizador es local, no se sincroniza con nadie. En un prototipo sin backend es esperable, pero el texto promete algo que la demo no muestra. La matriz (línea 21) sigue listando "Pomodoro compartido" como posibilidad pendiente, y eso es lo correcto.
- ⚠️ **Privacidad (L1000 y L1227):** la opción se guarda, pero no cambia nada visible en la demo. El README (línea 42) dice "control de quién ve tu disponibilidad". No es falso, pero en el test puede parecer que no hace nada.
- ⚠️ **README, línea 40:** el flujo dice "resultados (con una persona **o en grupo**) → perfil con desglose → chat → …". En la demo, los grupos **no pasan por el perfil ni por el chat**: "Unirme al grupo" lleva directo a la sesión confirmada (L1183).
- ⚠️ **Foco (WCAG 2.4.3, informe de mejoras línea 24):** el foco va a la ventana solo cuando se abre (L1111). Cada clic dentro de la ventana (estrellas, Pausar, ritmo) vuelve a dibujar todo el HTML y el foco se pierde. La sesión en vivo tampoco se cierra con Escape. Esto último no se prometió, pero es inconsistente con las otras ventanas.
- ⚠️ **Control y libertad:** la heurística del PDF dice que "si alguien se une a un grupo y no encaja, debe poder salir". La demo no tiene "salir del grupo" ni "cancelar sesión". [[Preguntas abiertas]] (línea 20) lo marca como parcial, y es honesto. Falta una entrada en la matriz o en el registro.
- ⚠️ El chat sigue mostrando a las personas bloqueadas en la lista de conversaciones (L870), aunque el texto de bloqueo dice "no podrá escribirte".

### PDF resumen ❌
Se extrajo el texto de `00 Resumen del proyecto.pdf` con PDFKit:
- Portada: "Plataforma de **escritorio**…". Sección 6 · Diseño: "Plataforma de escritorio (**no app móvil**)".
- El flujo Acompañado termina en "sesión confirmada en el horario": no hay grupos, reportar, sesión en vivo ni bloque de concentración.
- Esto contradice el README (líneas 3 y 38: "computador y celular") y la demo. El informe de mejoras (línea 39) y la matriz (P9, línea 25) ya lo reconocen, pero sigue sin corregirse.

### Notas que quedaron desactualizadas ❌
Las actualizaron en las capas 3 y 5, pero no en las capas 1, 2 y 4:
- `Notas/4 Metacognicion/Limites y sesgos.md`, **línea 24:** "El diseño hace match 1 a 1. ¿Es una decisión justificada o un incumplimiento?". Ya no es cierto.
- `Notas/1 Fuentes/Brief del cliente.md`, **línea 22:** "⚠️ Restricción por revisar: el diseño actual hace match 1 a 1". Ya no es cierto.
- `Notas/2 Interpretacion/Oportunidades de diseno.md`, **línea 11** (la respuesta a la #2 es solo "chat y calificar") y **línea 14** ("casi nada del *durante*"). Hay que agregar la sesión en vivo.
- `Notas/5 Estrategia/Indice del proyecto.md`, **línea 24:** la demo pesa "~90 KB". Hoy pesa 113 KB.
- `Inicio.md`, "Estado actual": no menciona los grupos ni las mejoras de hoy. Es menor.

## 4. Bitácora ⚠️

`Notas/Bitacora/2026-10-20.md` llega hasta la entrada de las **19:04**.
- ⚠️ **La aprobación no quedó registrada.** La aprobación para implementar "todo lo propuesto" no aparece en la bitácora. Puede que llegue al cerrar el turno o que haya ocurrido en otra sesión sin el hook. El informe de mejoras (línea 10) la cita, pero no tiene de dónde rastrearla.
- ⚠️ **Promesa abierta (entrada de las 19:04):** se avisó que el commit `3f86430` de Obsidian subió 56 líneas de la demo que nadie había documentado, y se ofreció revisarlo. No hay cierre. Según esta auditoría, eran las mejoras de hoy a medio implementar (`3f86430` +56 y `db72f45` +40 líneas en la demo). Ya estaban en GitHub Pages antes de que existieran el README, la matriz o el informe.
- ⚠️ **Tarea abierta (19:03):** 50 preguntas de la "capa 1" esperando respuesta. Varias se resolvieron sin preguntar (18: grupos, 27: reportar en la demo, 28: privacidad, 31: herramientas de la sesión). Conviene marcar cuáles ya no aplican.
- ⚠️ **Decisión fuera del registro:** Obsidian Git con commit y push cada 5 minutos (18:46–19:04). Ver el punto 1, línea 23.
- ⚠️ Orden: la entrada de las **18:36** aparece después de la de las 18:39 (problema de marca de hora del hook).

## 5. Matriz ✅ / ⚠️

- ✅ Las filas P1, P4, P5, P6, P7, P8 y P9 reflejan el informe de mejoras. El historial (línea 44) lo registra, y el orden sugerido (líneas 35–39) pone la evidencia primero.
- ⚠️ **P5 (línea 21):** "Posibilidades principales" sigue diciendo "objetivo de la sesión", que ya está hecho.
- ⚠️ **Mapa impacto × esfuerzo (líneas 31–32):** sigue como la versión anterior. P4 y P8 siguen en "Planificar" aunque ya están implementados. P3 sigue en "Hacer ya: test", que contradice el nuevo orden, donde P3 aparece quinto.
- ⚠️ La evidencia 🟢 de P6 (línea 22) es optimista (ver el punto 2).
- ⚠️ Las mejoras de P3 del informe (foco y Escape) no aparecen ni en la fila P3 ni en el historial.

## 6. Integridad del vault ⚠️

Revisado con un script que busca enlaces `[[...]]`, frontmatter y enlaces entrantes en todas las `.md` (sin contar `.claude/` ni la bitácora).
- ✅ **No hay enlaces rotos.** Los únicos "vacíos" son los marcadores `[[]]` de `Plantillas/Plantilla - Decision.md` (línea 11) y `Plantilla - Fuente.md` (línea 17), que son a propósito.
- ⚠️ **Notas vacías, sin frontmatter y sin enlaces entrantes, y ya subidas a GitHub:** `Notas/Untitled.md` (0 bytes) y `Notas/04 Bocetos 2.0.md` (0 bytes). Esta última se usó para probar Obsidian Git (bitácora, 19:02).
- ⚠️ **Sin enlaces entrantes:** `Notas/5 Estrategia/Sincronizacion en vivo.md` (ni [[Inicio]] ni [[Sistema de agentes]] la enlazan) y `Plantillas/Plantilla - Sesion de trabajo.md` (es esperable por ser una plantilla).
- ℹ️ `README.md` y `CLAUDE.md` no tienen frontmatter. Está bien, porque GitHub los muestra tal cual.
- ℹ️ Hay una carpeta vacía `Untitled/` en la raíz. `Untitled.base` está ignorado, así que no se sube.

## 7. Agentes y archivos originales ⚠️

- Archivos originales modificados: `06 Demo…/Studyhub demo (abrir en el navegador).html` y `README.md`. ✅ **Estaba autorizado**, según el pedido de la persona.
- ✅ Sin cambios: `index.html`, `00 Resumen del proyecto.pdf` y las carpetas `01`–`05` (`git status` y `git log`).
- ⚠️ **Publicación a medio hacer.** Con la sincronización automática, cualquier guardado intermedio llega a GitHub Pages en unos 5 minutos. La demo pública estuvo un rato con mejoras incompletas y sin documentar (`3f86430`, `db72f45`). Hoy no hubo daño, pero el "todo se sube solo" choca con la regla "ningún agente toca la demo sin permiso": el permiso cubre el cambio, no que se publique a medias.
- ⚠️ **Se saltó el ciclo.** Las mejoras las hizo la sesión principal (`agente: Claude (sesión principal)` en el informe), no los agentes de pilar, y **no pasaron por `critico-metacognitivo`** como pide [[Sistema de agentes]]. Por eso varios de los hallazgos de esta auditoría (la cita de Mateo, P6 en 🟢, las notas desactualizadas) llegaron hasta aquí.
- ℹ️ `.claude/launch.json` no tiene commit y contiene una ruta absoluta con el nombre de usuario del equipo. Se va a subir con la próxima sincronización. El riesgo es bajo, pero en un repositorio público es mejor usar una ruta relativa o ignorarlo.

---

## Acciones recomendadas (por prioridad)

| # | Acción | Quién |
|---|---|---|
| 1 | **Confirmar cuáles entrevistas son reales** ([[Limites y sesgos]] §1). Mientras tanto, citar a Juan Martín y Valentina en vez de Mateo en el informe de mejoras (línea 21) y en el registro (línea 21), y bajar P6 a 🟡. | Persona (confirmar) · `pilar-evidencia` (reescribir) |
| 2 | **Regenerar el PDF resumen**: "web para computador y celular", grupos, reportar y bloquear, sesión en vivo, bloque Solo. | Persona (el PDF es un original) |
| 3 | **Actualizar las notas desactualizadas**: [[Limites y sesgos]] L24, [[Brief del cliente]] L22, [[Oportunidades de diseno]] L11 y L14, [[Indice del proyecto]] L24 y el estado en [[Inicio]]. | `cronista` |
| 4 | **Completar la trazabilidad del registro**: enlazar [[Supuestos vs evidencia]] en la fila 20, poner "decisión técnica, sin evidencia de usuario" en la fila 22 y agregar Obsidian Git a la fila 23. Corregir la cita de la línea 21 del informe de mejoras. | `cronista` |
| 5 | **Pasar el informe de mejoras por `critico-metacognitivo`** antes de darlo por cerrado. | `/ciclo-de-mejora` |
| 6 | **Ajustar la demo a lo que promete**: quitar "compartido" del temporizador (L895) o explicarlo; corregir el flujo de grupos del README (línea 40); mantener el foco dentro de las ventanas después de cada render; Escape en la sesión en vivo; "Salir del grupo" o "Cancelar sesión"; ocultar a los bloqueados en la lista del chat (L870). | Persona aprueba · `pilar-usabilidad` / `pilar-confianza` implementan |
| 7 | **Matriz**: quitar "objetivo de la sesión" de P5, rehacer el mapa impacto × esfuerzo con P4 y P8 implementados, y anotar P3 (foco y Escape) en la fila y en el historial. | `pilar-*` correspondientes |
| 8 | **Sincronización**: decidir si los cambios a la demo se trabajan en una rama o con la sincronización pausada, para que GitHub Pages no publique versiones a medias. Cerrar en la bitácora la promesa de las 19:04. | Persona (decide) · Claude (configura) |
| 9 | **Bitácora**: registrar la aprobación de "todo lo propuesto" y marcar cuáles de las 50 preguntas ya quedaron resueltas por las decisiones de hoy. | `cronista` |
| 10 | **Limpieza del vault**: borrar o completar `Notas/Untitled.md` y `Notas/04 Bocetos 2.0.md`; enlazar [[Sincronizacion en vivo]] desde [[Sistema de agentes]] o [[Inicio]]; decidir qué hacer con `.claude/launch.json` (ruta absoluta). | Persona (borrar) · `cronista` (enlaces) |
