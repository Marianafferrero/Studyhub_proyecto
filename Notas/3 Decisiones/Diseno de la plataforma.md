---
capa: 3 · Decisiones
tipo: diseño
---
# Diseño de la plataforma

Plataforma **web para computador y celular** con menú lateral fijo: Home, Horarios, Links, Match, Herramientas, Cuadernos y Perfil.

**Dos modos**, que el usuario elige al entrar y puede cambiar cuando quiera:
- 🟠 **Acompañado** (coral): materia → resultados con % de compatibilidad → perfil con desglose (compromiso, concentración, nivel) → chat para acordar lugar y qué se da a cambio (almuerzo, ayuda con otra materia, pago o nada) → sesión confirmada en el horario → calificar la sesión.
- 🟢 **Solo** (teal): Home con las tareas del día, Horarios con bloques de estudio, Cuadernos por materia y Herramientas. Sin elementos de match.

**Paleta:** navy `#2F3C7E` · coral `#F96167` · dorado `#F9C74F` · teal `#028090` · verde `#2C5F2D`

## Evolución visual
1. **Bocetos a mano:** ![[Boceto 1.jpg|200]] ![[Boceto 2.jpg|200]]
2. **Crazy 8** (8 ideas para la pantalla de compatibilidad): ver `03 Crazy 8`
3. **User Flow:** ![[User Flow.png]]
4. **Bocetos 2.0**
   - Acompañado: ![[06 Resultados de match.png|300]] ![[07 Perfil y compatibilidad.png|300]]
   - Solo: ![[01 Home.png|300]] ![[03 Cuadernos.png|300]]
5. **Demo interactiva:** `06 Demo de la plataforma` (también publicada; ver [[Links del proyecto.txt]])

## Trazabilidad: de dónde sale cada pieza
| Pieza | Viene de |
|---|---|
| % de compatibilidad con desglose | [[Las 3 capas de compatibilidad]] · Oportunidad #1 |
| Modo Solo | [[Persona - Mateo]] · Oportunidad #3 |
| Cuadernos por materia | Pedido explícito de Valentina en [[Entrevistas]] |
| Chat para acordar intercambio | Responsabilidad mutua ([[Benchmark]], Studuo) |
| Calificar sesiones | Capa de compromiso: medir después del encuentro |

## Agregado el 2026-10-20
- **Grupos de 3 o 4**, **reportar y bloquear**, **privacidad**, **sesión en vivo** con Pomodoro y **bloque de concentración**. Detalle en [[2026-10-20 Mejoras implementadas en la demo]].

Decisiones con fecha: [[Registro de decisiones]] · Criterios: [[Heuristicas de Nielsen aplicadas]]
