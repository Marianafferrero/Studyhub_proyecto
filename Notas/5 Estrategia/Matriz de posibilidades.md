---
capa: 5 · Estrategia
tipo: matriz
actualizado: 2026-10-20 (2.ª versión)
mantiene: ciclo-de-mejora (los agentes de pilar actualizan su fila)
---
# Matriz de posibilidades

Esta nota cruza **los pilares de una plataforma como Studyhub** con su estado real (según [[Indice del proyecto]]), la evidencia que lo sostiene y las posibilidades de mejora. Cada pilar tiene un **agente** a cargo (ver [[Sistema de agentes]]).

**Escalas.** *Madurez:* 0 no existe · 1 idea · 2 diseñado o en la demo · 3 validado con usuarios. *Evidencia:* 🟢 fuerte · 🟡 débil · 🔴 ninguna. *Impacto y esfuerzo:* A alto · M medio · B bajo.

## 1. Matriz de pilares

| # | Pilar | Estado actual (dónde) | Madurez | Evidencia | Posibilidades principales | Riesgo si no se trabaja | Imp. | Esf. | Agente |
|---|---|---|---|---|---|---|---|---|---|
| P1 | **Evidencia de usuarios** | 5 entrevistas. Ya están listos el test y la encuesta ([[Guia de test de usabilidad]], [[Encuesta de requisitos]]), sin aplicar | 1 | 🟡 | **Aplicar** el test y la encuesta; confirmar la autenticidad de las entrevistas | Todo el diseño descansa sobre datos dudosos | A | M | `pilar-evidencia` |
| P2 | **Compatibilidad (match)** | % y desglose en 3 capas en la demo; datos de ejemplo | 2 | 🟡 | Definir cómo se calcula cada capa; cuestionario de onboarding; peso de las calificaciones; explicar el % | El % parece arbitrario y no genera confianza | A | M | `pilar-compatibilidad` |
| P3 | **Usabilidad y accesibilidad** | Demo responsive con aria-labels, aria-live y reduced-motion; ✅ foco y Escape en las ventanas | 2 | 🔴 | Test con tareas basadas en Nielsen; revisar contraste y foco; lenguaje cotidiano | Fallas que nadie detecta hasta la entrega | A | B | `pilar-usabilidad` |
| P4 | **Confianza y seguridad** | ✅ Verificado visible, reportar y bloquear, consejo de lugar público, privacidad de la disponibilidad | 2 | 🔴 | Protocolo de revisión de reportes; primera sesión solo en el campus; contacto de emergencia | Riesgo real al juntar desconocidos | A | M | `pilar-confianza` |
| P5 | **Sesión productiva (el "durante")** | ✅ Sesión en vivo: objetivo, Pomodoro 25/5 o 50/10, lista previa (temporizador individual) | 2 | 🟡 | Temporizador sincronizado entre participantes; modo "compañía silenciosa" | La oportunidad #2 queda sin respuesta | M | M | `pilar-sesion` |
| P6 | **Modo Solo y organización** | Home, Horarios, Cuadernos, Herramientas y ✅ bloque de concentración | 2 | 🟡 | Importar fechas de las materias; recordatorios; puente suave hacia Acompañado | Pierde a 3 de cada 5 usuarios | M | M | `pilar-solo` |
| P7 | **Retención y hábito** | Base técnica: ✅ la demo guarda el avance. Mecánicas de hábito sin trabajar | 1 | 🔴 | Rachas suaves; "volver a estudiar con…"; resumen semanal | La gente se va después de la primera semana | M | M | `pilar-retencion` |
| P8 | **Grupos (restricción del brief)** | ✅ Buscar, unirse y crear grupos de 3 o 4 con % grupal y la capa más baja | 2 | 🔴 | Fórmula real del % grupal; probar en el test si se entiende | Incumplir el brief del cliente | A | M | `pilar-compatibilidad` |
| P9 | **Coherencia de la entrega** | ✅ README al día. ⚠️ El PDF todavía dice "solo escritorio" y no tiene las funciones nuevas | 2 | 🟢 | Regenerar el PDF resumen | Contradicciones visibles para el evaluador | M | B | `auditor-proceso` |

## 2. Mapa impacto × esfuerzo

| | Esfuerzo **bajo** | Esfuerzo **medio** |
|---|---|---|
| **Impacto alto** | 🚀 **Hacer ya:** P3 test de usabilidad | 🎯 **Planificar:** P1 aplicar test y encuesta · P2 fórmula del % (individual y grupal) |
| **Impacto medio** | ✅ Ganancias rápidas: P9 regenerar el PDF | 🧪 **Explorar:** P7 retención · P5 temporizador sincronizado |
| *Ya hecho en la demo (falta validar)* | | P4 confianza · P5 sesión en vivo · P6 bloque Solo · P8 grupos |

## 3. Orden sugerido (anticiparse)
1. **P1**: aplicar el test y la encuesta. Ahora es lo más importante: el producto ya creció más que su evidencia.
2. **P2**: definir la fórmula del % (individual y grupal) con los resultados de la encuesta.
3. **P9**: regenerar el PDF resumen con lo nuevo.
4. **P7**: mecánicas de hábito, después de ver en el test qué valoran.
5. **P3**: auditoría de accesibilidad con `pilar-usabilidad`.

## 4. Historial de la matriz
| Fecha | Cambio | Por quién |
|---|---|---|
| 2026-10-20 | Matriz inicial a partir del índice del proyecto y la revisión de la demo | Claude |
| 2026-10-20 | Implementados P4, P5, P6, P8 y la base de P7 en la demo; instrumentos de P1 listos ([[2026-10-20 Mejoras implementadas en la demo]]) | Claude |
| 2026-10-20 | Correcciones de la [[Auditoria 2026-10-20]]: P6 baja a 🟡, se aclara que el temporizador de P5 es individual y se rehace el mapa | Claude |
