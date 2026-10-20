---
name: ciclo-de-mejora
description: Corre un ciclo de mejora continua de Studyhub sobre un pilar de la Matriz de posibilidades - agente de pilar, crítico metacognitivo, auditor y cronista. Úsalo cuando la persona pida "un ciclo de mejora", "mejorar el pilar X" o "/ciclo-de-mejora P2".
---
# Ciclo de mejora de Studyhub

Argumento opcional: un pilar (`P1`–`P9`) o el nombre de un agente. Sin argumento, elige el pilar de mayor prioridad según la sección "Orden sugerido" de la matriz, saltando los que tengan un informe de hace menos de 7 días en `Notas/6 Mejoras/`.

## Pasos (en este orden, uno tras otro)
1. **Elegir:** lee `Notas/5 Estrategia/Matriz de posibilidades.md` y di en una línea qué pilar vas a trabajar y por qué.
2. **Agente de pilar:** lanza el agente que corresponde (columna "Agente" de la matriz) con el Agent tool. Pásale el pilar y lo que sepas del contexto reciente (por ejemplo, la última auditoría en `Notas/7 Auditoria/`).
3. **Crítico:** lanza `critico-metacognitivo` sobre el informe que acaba de escribir el agente de pilar.
4. **Auditor:** lanza `auditor-proceso` para verificar el ciclo completo.
5. **Cronista:** lanza `cronista` para destilar la bitácora del día.
6. **Cierre:** muéstrale a la persona, en menos de 10 líneas:
   - las mejoras propuestas, con el veredicto del crítico;
   - los ⚠️ y ❌ del auditor;
   - **la decisión que necesitas de ella** (por ejemplo, si aplicar una mejora a la demo).
   No apliques cambios a la demo ni a los archivos originales sin su sí explícito.
7. Si la persona aprueba, haz commit de `Notas/` con un mensaje en español. Haz push solo si te lo pide.

## Reglas
- Un ciclo es un pilar. No lances varios agentes de pilar a la vez, salvo que la persona lo pida.
- Si un paso falla, dilo y sigue con el siguiente cuando tenga sentido.
