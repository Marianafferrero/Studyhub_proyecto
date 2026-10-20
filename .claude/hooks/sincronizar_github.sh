#!/bin/bash
# Sincroniza el proyecto con GitHub: commit y push automáticos al terminar cada respuesta de Claude.
# La bitácora cruda (Notas/Bitacora/) queda fuera por .gitignore: el repo es público.
# Si algo falla, avisa en pantalla con un systemMessage y lo anota en .git/studyhub-sync.log.

RAIZ="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"
cd "$RAIZ" || exit 0
LOG=.git/studyhub-sync.log
CERROJO=.git/studyhub-sync.lock

avisar() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') $1" >>"$LOG"
  printf '{"systemMessage": "⚠️ Studyhub no se subió a GitHub: %s (detalle en .git/studyhub-sync.log)"}\n' "$1"
  exit 0
}

# Evita dos sincronizaciones a la vez (por ejemplo, dos sesiones de Claude abiertas).
mkdir "$CERROJO" 2>/dev/null || exit 0
trap 'rmdir "$CERROJO"' EXIT

git add -A
if ! git diff --cached --quiet; then
  archivos=$(git diff --cached --name-only | head -5 | sed 's#.*/##' | paste -sd ',' - | sed 's/,/, /g')
  total=$(git diff --cached --name-only | wc -l | tr -d ' ')
  [ "$total" -gt 5 ] && archivos="$archivos y $((total - 5)) más"
  git commit -q -m "Sincronización automática: $archivos" >>"$LOG" 2>&1 || avisar "falló el commit"
fi

git pull -q --rebase --autostash >>"$LOG" 2>&1 || { git rebase --abort 2>/dev/null; avisar "hay cambios en GitHub que chocan con los locales"; }
[ -z "$(git log --oneline @{u}..HEAD 2>/dev/null)" ] && exit 0
git push -q >>"$LOG" 2>&1 || avisar "falló el push (¿sin internet?)"
