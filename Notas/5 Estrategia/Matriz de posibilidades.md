---
capa: 5 · Estrategia
tipo: matriz
actualizado: 2026-10-20
mantiene: ciclo-de-mejora (los agentes de pilar actualizan su fila)
---
# Matriz de posibilidades

Esta nota cruza **los pilares de una plataforma como Studyhub** con su estado real (según [[Indice del proyecto]]), la evidencia que lo sostiene y las posibilidades de mejora. Cada pilar tiene un **agente** a cargo (ver [[Sistema de agentes]]).

**Escalas.** *Madurez:* 0 no existe · 1 idea · 2 diseñado o en la demo · 3 validado con usuarios. *Evidencia:* 🟢 fuerte · 🟡 débil · 🔴 ninguna. *Impacto y esfuerzo:* A alto · M medio · B bajo.

## 1. Matriz de pilares

| # | Pilar | Estado actual (dónde) | Madurez | Evidencia | Posibilidades principales | Riesgo si no se trabaja | Imp. | Esf. | Agente |
|---|---|---|---|---|---|---|---|---|---|
| P1 | **Evidencia de usuarios** | 5 entrevistas; la encuesta no se hizo ([[Entrevistas]]) | 1 | 🟡 | Confirmar la autenticidad de las entrevistas; encuesta de jerarquía de requisitos; test de usabilidad con 5 personas | Todo el diseño descansa sobre datos dudosos | A | M | `pilar-evidencia` |
| P2 | **Compatibilidad (match)** | % y desglose en 3 capas en la demo; datos de ejemplo | 2 | 🟡 | Definir cómo se calcula cada capa; cuestionario de onboarding; peso de las calificaciones; explicar el % | El % parece arbitrario y no genera confianza | A | M | `pilar-compatibilidad` |
| P3 | **Usabilidad y accesibilidad** | Demo responsive con aria-labels, aria-live y reduced-motion | 2 | 🔴 | Test con tareas basadas en Nielsen; revisar contraste y foco; lenguaje cotidiano | Fallas que nadie detecta hasta la entrega | A | B | `pilar-usabilidad` |
| P4 | **Confianza y seguridad** | Verificación con correo institucional. **No** hay reportar ni bloquear | 1 | 🔴 | Reportar y bloquear; encuentros en lugares públicos del campus; reputación visible; privacidad del horario | Riesgo real al juntar desconocidos | A | M | `pilar-confianza` |
| P5 | **Sesión productiva (el "durante")** | Chat para acordar y calificar después; nada durante la sesión | 1 | 🟡 | Pomodoro compartido; objetivo de la sesión; modo "compañía silenciosa" | La oportunidad #2 queda sin respuesta | M | M | `pilar-sesion` |
| P6 | **Modo Solo y organización** | Home, Horarios con tipos de bloque, Cuadernos, Herramientas | 2 | 🟢 | Importar fechas de las materias; recordatorios; puente suave hacia Acompañado | Pierde a 3 de cada 5 usuarios | M | M | `pilar-solo` |
| P7 | **Retención y hábito** | No está trabajado | 0 | 🔴 | Rachas suaves; "volver a estudiar con…"; resumen semanal | La gente se va después de la primera semana | M | M | `pilar-retencion` |
| P8 | **Grupos (restricción del brief)** | Solo hay match 1 a 1 | 0 | 🔴 | Sesiones de 3 o 4 personas con compatibilidad grupal; o justificar el 1 a 1 | Incumplir el brief del cliente | A | M | `pilar-compatibilidad` |
| P9 | **Coherencia de la entrega** | El PDF dice "solo escritorio", pero la demo es responsive | 2 | 🟢 | Actualizar el PDF y el README; trazabilidad completa | Contradicciones visibles para el evaluador | M | B | `auditor-proceso` |

## 2. Mapa impacto × esfuerzo

| | Esfuerzo **bajo** | Esfuerzo **medio** |
|---|---|---|
| **Impacto alto** | 🚀 **Hacer ya:** P3 test de usabilidad | 🎯 **Planificar:** P1 evidencia · P2 cálculo del match · P4 confianza · P8 grupos |
| **Impacto medio** | ✅ Ganancias rápidas: P9 | 🧪 **Explorar:** P5 sesión · P6 Solo · P7 retención |

## 3. Orden sugerido (anticiparse)
1. **P1**: confirmar las entrevistas. Todo lo demás depende de esto.
2. **P9 + P3**: son baratos y visibles en la entrega.
3. **P8 + P2**: resuelven el brief y el corazón del producto.
4. **P4**: la seguridad es condición para cualquier match real.
5. **P5, P6 y P7**: profundizan el valor.

## 4. Historial de la matriz
| Fecha | Cambio | Por quién |
|---|---|---|
| 2026-10-20 | Matriz inicial a partir del índice del proyecto y la revisión de la demo | Claude |
