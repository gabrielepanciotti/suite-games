# Games

Games is an open-source starter for learning games and exercises. It provides a
FastAPI backend, a React/Vite frontend, PostgreSQL wiring, internationalized UI
scaffolding, and a health endpoint; no game-specific experience has been built
yet.

## Features

- FastAPI application with a `/health` endpoint
- React 18, TypeScript, Vite, and Tailwind frontend
- PostgreSQL and Alembic-ready backend layout
- Docker development and production configurations

## Requirements

- Python 3.13
- Node.js 20 and npm
- Docker Compose (for the containerized stack)
- A checkout of the Life framework beside this repository. The framework supplies
  `suite_backend_core`, `@suite/i18n`, and `@suite/design-system`.

## Quickstart

Clone this repository and the framework as sibling directories (the framework
directory must be named `Life`):

```bash
git clone <games-repository-url> Games
git clone <life-framework-url> Life
cd Games
cp .env.example .env
```

For local development, first prepare the framework packages, then start each
application in a separate terminal:

```bash
cd ../Life && npm ci
cd ../Games
python -m venv .venv
.venv/bin/pip install -r backend/requirements.txt ../Life/packages/backend-core
PYTHONPATH=backend PORT=10048 .venv/bin/python -m games_backend

cd frontend
npm ci
npm run dev -- --port 3382
```

Alternatively, set `LIFE_FRAMEWORK_DIR` to the sibling framework checkout and
start the complete Docker stack:

```bash
export LIFE_FRAMEWORK_DIR="$(cd ../Life && pwd)"
bash deploy/build.sh
bash deploy/compose.sh up -d
```

## Tests

The backend suite requires the Life framework package and runs with
`PYTHONPATH=backend pytest backend/tests -q`. The frontend has a TypeScript
check exposed as `npm test`, followed by `npm run build`. CI checks out the
framework from the repository named by `LIFE_FRAMEWORK_REPO`; when unset, it
uses `<repository-owner>/suite-life`.

## Configuration

| Variable | Purpose |
| --- | --- |
| `DB_PASSWORD` | PostgreSQL password |
| `DB_HOST_PORT` | Host port exposed for PostgreSQL |
| `DATABASE_URL` | Backend database connection URL |
| `PORT` | Backend listen port |
| `LIFE_FRAMEWORK_DIR` | Path to the sibling Life framework checkout |
| `VITE_BACKEND_PROXY_TARGET` | Frontend development proxy target |

## License

MIT. See [LICENSE](LICENSE).
