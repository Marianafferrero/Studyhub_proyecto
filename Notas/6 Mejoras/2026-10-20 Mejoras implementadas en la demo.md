---
capa: 6 · Mejoras
pilar: P4, P5, P6, P7, P8, P9
agente: Claude (sesión principal)
confianza: media
fecha: 2026-10-20
---
# Mejoras implementadas en la demo · 2026-10-20

La persona aprobó en la conversación aplicar "todo lo propuesto" de la [[Matriz de posibilidades]]. Este informe sigue el protocolo de capas.

## 1. Observar
Según el [[Indice del proyecto]], a la demo le faltaban: reportar y bloquear, sesiones grupales, algo para el *durante* de la sesión y guardar datos entre visitas.

## 2. Qué se implementó

| Pilar | Mejora | Dónde está en la demo | Evidencia que la sostiene |
|---|---|---|---|
| **P8 · Grupos** | Selector "Con una persona / En grupo pequeño"; grupos de 3 o 4 con % grupal y la **capa más baja** a la vista; **crear grupo** (objetivo, cupo, día, hora, lugar y regla) y **unirse** | Match → Resultados | Restricción del [[Brief del cliente]]; [[Las 3 capas de compatibilidad]] |
| **P4 · Confianza** | Distintivo "Correo institucional verificado"; **reportar o bloquear** desde el perfil y el chat (5 motivos, detalle opcional, bloqueo); consejo de lugar público al acordar el lugar; panel **Privacidad y seguridad** (quién ve tu disponibilidad, lista de bloqueados) | Perfil del match, chat y Perfil propio | Hipótesis "la confianza es una barrera" ([[Supuestos vs evidencia]], sin evidencia) |
| **P5 · Sesión** | **Sesión en vivo**: objetivo acordado, Pomodoro 25/5 o 50/10, rondas y lista "antes de empezar". Al terminar, abre la calificación | Inicio → "Empezar sesión" o la pantalla de sesión confirmada | Oportunidad #2 ([[Oportunidades de diseno]]); Mateo y Juan Martín: "terminamos hablando" ([[Entrevistas]]) |
| **P6 · Solo** | **Bloque de concentración** con el mismo temporizador, sin elementos sociales | Inicio (modo Solo) → "Próximo bloque" | [[Persona - Mateo]]: concentrarse, avanzar a su ritmo |
| **P7 · Retención** (base) | La demo **guarda el avance** en el navegador | Todo; "Cerrar sesión" reinicia | Requisito técnico para que el hábito se pueda probar |
| **P3 · Accesibilidad** | Las ventanas nuevas reciben el foco al abrirse; **Escape** cierra reportar, calificar y "Más"; `role="timer"` y `aria-live` en la fase del temporizador | Ventanas | WCAG 2.2 (2.1.2 y 2.4.3) |
| **P9 · Coherencia** | README actualizado con las funciones nuevas | `README.md` | — |

**Verificación:** se recorrieron en el navegador los flujos de crear grupo, unirse, sesión en vivo con el temporizador corriendo, calificación, reportar (con validación), bloquear, desbloquear, privacidad y bloque Solo, en computador y celular, sin errores de JavaScript.

## 3. Cómo sabríamos si funcionó
- **Grupos:** en el test, ¿la persona entiende el % grupal y la "capa más baja" sin ayuda?
- **Seguridad:** ¿encuentra cómo reportar en menos de 30 segundos?
- **Sesión en vivo:** ¿la usaría de verdad o le parece una interrupción?
→ Todo esto entra en la [[Guia de test de usabilidad]].

## 4. Metacognición
- **Supuestos:** que el Pomodoro sirve para estudiar en pareja (solo Juan Martín y Mateo apuntan al problema de la distracción); que el % grupal se entiende igual que el individual; que reportar en 5 motivos alcanza.
- **Confianza: media.** Ninguna de estas mejoras se probó todavía con estudiantes.
- **Me haría cambiar de opinión:** que en el test los grupos confundan más de lo que ayudan, o que nadie use el temporizador.
- **Pendiente honesto:** el % de los grupos es un dato de ejemplo; todavía no hay una fórmula ([[Preguntas abiertas]]). El PDF resumen sigue diciendo "solo escritorio".
