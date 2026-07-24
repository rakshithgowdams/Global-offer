#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${VERCEL:-}" == "1" ]]; then
  echo "Vercel detected: building the native Next.js artifact..."
  exec npm run build:vercel
fi

echo "Sites/local build detected: building the vinext worker artifact..."
exec bash "${script_dir}/build-verified.sh"
