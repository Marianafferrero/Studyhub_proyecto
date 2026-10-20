# Contexto del proyecto Studyhub (para Claude u otra IA)

Proyecto académico de **Usabilidad** (UX). Studyhub es una plataforma web (computador y celular) que conecta universitarios para estudiar mostrando la **compatibilidad** antes de comprometerse, con un modo **Solo** para quienes prefieren estudiar sin grupo.

## Cómo leer este repositorio
- Empieza por `Inicio.md`. Es el mapa del vault de Obsidian.
- El conocimiento está en capas dentro de `Notas/`: **1 Fuentes** (datos crudos), **2 Interpretacion**, **3 Decisiones** y **4 Metacognicion** (supuestos, límites y preguntas abiertas).
- Los archivos originales (PDF, PNG, PPTX y la demo HTML) están en las carpetas `00`–`06` y **no se mueven**: `README.md` y GitHub Pages (`index.html`) dependen de esas rutas.
- La demo interactiva es un solo archivo: `06 Demo de la plataforma/Studyhub demo (abrir en el navegador).html`. `index.html` (GitHub Pages) solo redirige a esa demo.

## Reglas al trabajar acá
- Escribe en español, con tono de bitácora de diseño.
- Distingue siempre **evidencia** (capa 1) de **interpretación** (capa 2). Si agregas una afirmación, enlaza la fuente con un enlace interno de Obsidian (doble corchete).
- Cada decisión nueva de diseño va en `Notas/3 Decisiones/Registro de decisiones.md` con el formato: decisión, por qué, evidencia y alternativa descartada.
- Antes de afirmar que algo está "validado", revisa `Notas/4 Metacognicion/Supuestos vs evidencia.md` y `Limites y sesgos.md`.
- Las plantillas para notas nuevas están en `Notas/Plantillas/`.

## Sistema de agentes y mejora continua
- Mapa: `Notas/5 Estrategia/Sistema de agentes.md`. Prioridades: `Notas/5 Estrategia/Matriz de posibilidades.md`.
- Agentes en `.claude/agents/`. El ciclo completo se corre con la skill `ciclo-de-mejora`.
- El hook `Stop` anexa cada turno a `Notas/Bitacora/`. Esa carpeta está en `.gitignore` porque el repositorio es público.
