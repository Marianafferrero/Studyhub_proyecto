---
capa: 3 · Decisiones
tipo: inventario de componentes
fecha: 2026-10-25
origen: Tarea de la clase 7 de Usabilidad (Fase 3 · From Flow To Interface · UI + Wireframing, Sprint 8)
---
# Componentes de la interfaz

**Tarea de la clase 7:** identificar al menos 5 componentes en el prototipo. La clase define la UI como el espacio donde ocurre la interacción, no solo como «lo bonito». Incluye contenido, estructura, navegación, interacción y elementos visuales. Se revisaron los componentes de la clase (botones, íconos, textos, colores y menús) y se identificaron **9** en la [[Diseno de la plataforma|demo]] (`06 Demo de la plataforma/Studyhub demo (abrir en el navegador).html`).

> 🧠 **Evidencia vs. interpretación.** El «dónde está» es un hecho (se ve en el código y en la demo). El «por qué» es intención de diseño. Ningún componente se probó todavía con usuarios (ver [[Limites y sesgos]] §5).

## Resumen

| # | Componente (clase 7) | Dónde en Studyhub | Elemento de la UI |
|---|---|---|---|
| 1 | Botones | Toda la demo: 4 variantes jerarquizadas | Interacción |
| 2 | Íconos | Navegación, acciones y estados (14 íconos en línea) | Elementos visuales |
| 3 | Textos y jerarquía | Encabezado de cada página: *kicker*, título y descripción | Contenido |
| 4 | Colores con significado | Acento coral (Acompañado) / teal (Solo) | Elementos visuales |
| 5 | Menú lateral | Computador: barra azul marino fija a la izquierda | Navegación |
| 6 | Menú inferior | Celular: tabbar de 5 botones + hoja «Más» | Navegación |
| 7 | Stepper | Flujo de Match: Materia → Resultados → Perfil → Chat → Sesión | Estructura |
| 8 | Menú desplegable | Día, hora, cupo, regla del grupo, semestre | Interacción |
| 9 | Chips y modales | Filtros del match; ventanas para calificar, reportar y salir | Interacción |

## Detalle

### 1. Botones
- **Qué hay:** 4 variantes con una jerarquía clara.
  - `btn-primary` (coral): acción principal.
  - `btn-accent`: toma el color del modo activo.
  - `btn-line` (con borde): acción secundaria.
  - `btn-gold`: destacados.
  - Además: tamaños `btn-sm` y `btn-block`, y botones solo de ícono (`iconbtn`).
- **Por qué:** una sola acción dominante por pantalla, para que se entienda qué hacer después (Nielsen: *reconocer antes que recordar*, ver [[Heuristicas de Nielsen aplicadas]]).
- **Mejora posible:** revisar que no haya dos botones coral compitiendo en la misma vista y que el amarillo cumpla el contraste AA.

### 2. Íconos
- **Qué hay:** un set propio de 14 íconos en línea: `back`, `book`, `cal`, `check`, `flag`, `mail`, `match`, `pin`, `plus`, `search`, `send`, `spark`, `tool`, `user`.
- **Por qué:** dan un ancla visual a cada sección. El ícono activo se pinta con el color del modo.
- **Mejora posible:** el ícono `match` no es un estándar reconocible. En el menú siempre va con texto, pero si aparece solo necesita `aria-label`.

### 3. Textos y jerarquía
- **Qué hay:** cada página empieza con `head()`: un *kicker* (11,5 px, mayúsculas, color del modo), un título `h1` que escala entre 24 y 32 px y una descripción en gris. Las secciones usan `label-caps`, y las ayudas, `small muted`.
- **Por qué:** se lee de arriba abajo, del contexto («¿qué quieres estudiar hoy?») a la acción. El tono es cercano y con tuteo ([[Cuestionario capa 1]]).
- **Mejora posible:** el *kicker* de 11,5 px es chico en el celular. Conviene revisarlo en el test de la S3.

### 4. Colores con significado
- **Qué hay:** tokens de marca: azul marino `#2F3C7E`, coral `#E8535A`, amarillo `#F9C74F`, teal `#027480` y verde `#2C5F2D`. La variable `--accent` **cambia según el modo**: coral en Acompañado y teal en Solo (`.mode-solo`). El verde marca los pasos completados.
- **Por qué:** el color indica en qué modo estás sin tener que leerlo. Responde a los [[Insights]] de los dos modos.
- **Mejora posible:** el significado no puede depender solo del color (WCAG 1.4.1). El modo también tiene que decirse con texto. Además, falta la paleta oscura derivada ([[Cuestionario capa 2]]).

### 5. Menú lateral
- **Qué hay:** en el computador, un `<aside class="side">` azul marino fijo con 6 secciones (Home page, Horarios, Links, Match, Herramientas, Cuadernos) y Perfil abajo. La sección activa lleva un borde del color del modo.
- **Por qué:** la clase lo describe como el menú típico de las plataformas web. Studyhub se usa como herramienta de trabajo diaria.
- **Mejora posible:** ⚠️ **inconsistencia**: el menú lateral dice «Home page» y el inferior dice «Inicio». Hay que unificarlo como «Inicio» (Nielsen: *consistencia y estándares*).

### 6. Menú inferior
- **Qué hay:** en el celular (menos de 768 px), el menú lateral se convierte en una `tabbar` fija con Inicio, Horarios, Match, Cuadernos y **Más**. «Más» abre una hoja (*bottom sheet*) con Links, Herramientas y Perfil. Match muestra una insignia con las sesiones sin calificar.
- **Por qué:** las 4 secciones más usadas quedan al alcance del pulgar. Es la decisión de demo responsive del [[Registro de decisiones]].
- **Mejora posible:** con 7 secciones, Herramientas (Pomodoro) queda escondida en «Más», aunque el modo Solo es un producto propio. Hay que evaluar si debería estar en la tabbar.

### 7. Stepper
- **Qué hay:** una barra de progreso en el flujo de Match con 5 pasos numerados. Los pasos hechos se ven en verde, el actual en coral y los pendientes en gris. En el celular se desplaza en horizontal.
- **Por qué:** la clase lo define como algo que «orienta al usuario dentro de un proceso». Encontrar un match es el proceso más largo de la demo (Nielsen: *visibilidad del estado del sistema*).
- **Mejora posible:** los pasos no se pueden clicar. Volver atrás depende de los botones «← Volver».

### 8. Menú desplegable
- **Qué hay:** `<select>` con `<label>` asociado para elegir día, hora, cupo del grupo (3 o 4), regla del grupo (Pomodoro 50/10, 25/5…), tipo de link y semestre.
- **Por qué:** son opciones cerradas y conocidas; el desplegable evita errores de escritura (Nielsen: *prevención de errores*).
- **Mejora posible:** elegir día y hora con dos desplegables es lento. Un mini calendario con los bloques en común sería más directo y respondería a la privacidad del horario.

### 9. Chips y modales (componentes adicionales)
- **Chips:** filtros de match conmutables («Compromiso alto», «Silencio», «Mismo nivel»), con `aria-pressed`. También se usan para elegir «qué ofreces» en el chat.
- **Modales:** `role="dialog"` + `aria-modal` para **calificar la sesión**, **reportar** y **salir del grupo**, sobre un fondo oscurecido.
- **Por qué:** los chips muestran las 3 capas de compatibilidad como filtros ([[Las 3 capas de compatibilidad]]). Los modales cortan el flujo solo en momentos de decisión.
- **Mejora posible:** verificar que el foco quede atrapado dentro del modal y que vuelva al botón de origen al cerrarlo (WCAG 2.4.3).

## Lo que sale de este inventario
- La demo usa **3 de los 7 tipos de menú** de la clase (lateral, inferior y desplegable) y además el **stepper**. No usa acordeón ni menú contextual (⋮). Un menú ⋮ en la tarjeta de perfil podría alojar «Reportar» y «Bloquear» ([[Cuestionario capa 2]]).
- Hay una inconsistencia para corregir ya: «Home page» vs. «Inicio».
- Estas observaciones alimentan el test de usabilidad de la S3 ([[Cuestionario capa 2]], hoja de ruta).

Relacionado: [[Diseno de la plataforma]] · [[Heuristicas de Nielsen aplicadas]] · [[Matriz de posibilidades]]
