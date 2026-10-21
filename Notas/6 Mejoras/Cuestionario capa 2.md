---
capa: 6 · Mejoras
tipo: cuestionario
fecha: 2026-10-20
estado: capa 2 respondida · capa 3 después del ciclo 1
---
# Cuestionario de mejora · Capa 2 (especialización)

Se escribió a partir de las 7 tensiones del [[Cuestionario capa 1]] y se respondió en el chat, eligiendo entre opciones. Son **28 preguntas**. Las respuestas son intención de diseño; la evidencia vive en la capa 1 del vault.

## Tensiones resueltas
| # | Tensión | Resolución |
|---|---|---|
| 1 | Preocupan los datos inventados, pero solo se iba a mencionar en general | **Reemplazar** la evidencia simulada con la encuesta y el test |
| 2 | Alcance vs. 6 a 12 h | Figma solo para las slides; grupos simplificados; ilustraciones mínimas |
| 3 y 5 | Grupos de 3–4 con capa más baja vs. 5–6 con promedio | **3–4 con capa más baja** |
| 4 | localStorage vs. datos simulados | Se **mantiene el guardado** con datos de ejemplo |
| 7 | Figma vs. HTML | Figma solo para las slides |

## Hallazgo crítico 🔴
La entrevista de **Mateo** es la única simulada (Juan Martín, Valentina, María José y Jacobo son reales). La [[Persona - Mateo]] se **re-ancla** en Juan Martín y Jacobo. Ver [[Limites y sesgos]] §6.

## Respuestas por pilar
- **P1 · Evidencia:** encuesta en **Tally** (solo vs. acompañado, ranking de capas, tamaño de grupo, seguridad) + **test presencial** de 15 min con 3 personas sobre las 4 tareas críticas.
- **P2 · Match:** horario y materias **filtran**; % = Conocimiento 30 + Compromiso 35 + Concentración 35. Las capas se miden con nivel por materia (Conocimiento), escenarios (Concentración) y horas reales disponibles (Compromiso).
- **P8 · Grupos (demo):** tarjeta de grupo con la capa más baja, «Sumar a alguien» desde un match 1 a 1 y grupo abierto por evaluación.
- **P4 · Confianza:** reportar = elegir un motivo + bloqueo automático + «Revisaremos en 24 h». La reputación muestra puntualidad, «volverían a estudiar», sesiones completadas y estrellas.
- **P6 · Solo:** al entrar, la Home pregunta «¿Hoy estudias solo o acompañado?».
- **P7 · Retención:** el resumen semanal muestra objetivos cumplidos, próximas evaluaciones y una sugerencia de «volver con…».
- **Diseño:** el modo oscuro se deriva de los colores de marca sin cambiarlos (contraste AA).
- **Auditoría:** un script local deja el informe en `Notas/7 Auditoria`. La trazabilidad revisa que cada decisión enlace a su fuente y que no haya decisiones contradictorias.

## Presentación
- **Guion de la demo en vivo:** problema → solución (cada frase de entrevista lleva a la pantalla que la responde). Hay que usar solo frases de entrevistas **reales**.
- **Slide de metodología:** evidencia real vs. simulada, matriz de pilares y decisiones descartadas.

## Hoja de ruta (ciclos semanales, menos de 3 h cada uno)
| Semana | Foco | Agentes |
|---|---|---|
| S1 | Encuesta en Tally + re-anclar a Mateo | `pilar-evidencia` |
| S2 | Regla del % + grupos simplificados en la demo | `pilar-compatibilidad` |
| S3 | Test con 3 personas + accesibilidad AA + modo oscuro | `pilar-usabilidad` |
| S4 | Slides en Figma + auditoría final | `auditor-proceso` |

## 🧠 Nuevas preguntas abiertas (semillas de la capa 3)
1. El guion «problema → solución» usaba frases de Mateo («terminamos hablando»). ¿Las frases de Juan Martín y Valentina alcanzan para cubrir la capa de Concentración?
2. Si la encuesta muestra que la mayoría prefiere grupos de 5–6, ¿se revierte la decisión de 3–4?
3. Los pesos 30/35/35 son una intuición. ¿El ranking de capas de la encuesta los recalibra?
4. «Estrellas» y «volverían a estudiar» miden casi lo mismo: ¿es redundante mostrar las dos?
5. El selector de la Home («¿solo o acompañado?») agrega un paso cada día. ¿Se recuerda la última elección?
