# Gym Diary

A simple full-stack application to manage gym diaries. Frontend is built with Angular and the backend is Node.js (Express). Use this repo to track workouts, notes, and progress.

## Tech stack
- Frontend: Angular
- Backend: Node.js / Express
- Package managers: npm or pnpm

## Features
- Create, read, update, delete workout diary entries
- User-friendly Angular UI
- RESTful API backend

## Prerequisites
- Node.js (>= 16)
- npm or pnpm
- Angular CLI (for local `ng serve`) — optional if using package scripts

## Repository layout
- /backend — Node.js API
- /frontend — Angular app
- readme.md — this file

## Quickstart (using npm)

1. Clone the repo
```bash
git clone <repo-url>
cd <repo-root>
```

2. Start backend
```bash
cd backend
npm install
npm start
```

3. Start frontend (in a new terminal)
```bash
cd frontend
npm install
ng serve
# or if a start script exists:
# npm start
```

Default ports:
- Backend: 3000 (or as configured in backend)
- Frontend: 4200

## Quickstart (using pnpm)

1. Clone the repo
```bash
git clone <repo-url>
cd <repo-root>
```

2. Start backend
```bash
cd backend
pnpm install
# if a start script is defined:
pnpm start
# or run node directly:
# pnpm exec node index.js
```

3. Start frontend (in a new terminal)
```bash
cd frontend
pnpm install
# if a start script is defined:
pnpm start
# or use Angular CLI via pnpm:
pnpm exec ng serve
```

## Environment
- Backend: create a `.env` in /backend for settings like PORT, DATABASE_URL, JWT_SECRET.
- Frontend: update `src/environments` as needed (API base URL etc.)

## Run both services concurrently (optional)
You can open two terminals and run backend and frontend separately, or add a root-level script to run both (e.g., using concurrently) and use npm/pnpm to run it.

## Build for production
- Frontend: `ng build --prod` (or via package script)
- Backend: ensure environment variables and use a process manager (pm2, systemd) to run the Node app

## Contributing
Contributions welcome. Open issues or PRs with clear descriptions and tests when applicable.

## License
Specify a license (e.g., MIT) in LICENSE file.
