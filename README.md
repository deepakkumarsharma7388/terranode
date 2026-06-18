# Terranode

```
terranode/
  frontend/   React + Vite + Tailwind + React Router
  backend/    Express + Nodemailer
```

## Run frontend
```bash
cd frontend
npm install
npm run dev
```
http://localhost:5173 — routes: `/`, `/applications`, `/modules`, `/features`, `/use-cases`, `/about`, `/contact`

## Run backend
```bash
cd backend
npm install
cp .env.example .env   # add SMTP credentials
npm run dev
```
http://localhost:5000

Frontend proxies `/api/*` to the backend (see `frontend/vite.config.js`).
