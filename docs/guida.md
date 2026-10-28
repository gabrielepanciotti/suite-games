# Games user guide

## What it does

Games is a starter application for learning games and exercises. It currently
ships a working FastAPI backend, React frontend, and PostgreSQL service, but no
game-specific feature yet.

## Local addresses

- Frontend: <http://localhost:3382>
- Backend: <http://localhost:10048>

## Troubleshooting

- If the backend does not start, check that the `games-db` container is healthy.
- If the frontend is blank in development, run `npm run dev -- --port 3382` in
  `frontend/`.
