# MERN Student Manager — Lab Test 4 (Vite)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?logo=vercel)](https://your-vercel-url.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-Railway-purple?logo=railway)](https://your-railway-url.up.railway.app)

## Student Details
- **Name:** Your Name
- **Student ID:** Your ID

## Project Structure
```
mern-student-manager/
├── backend/
│   ├── models/Student.js
│   ├── routes/studentRoutes.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── StudentForm.jsx
    │   │   └── StudentList.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Local Setup

### Backend
```bash
cd backend && npm install
cp .env.example .env
# Add MONGO_URI to .env
npm run dev
```

### Frontend
```bash
cd frontend && npm install
cp .env.example .env
npm run dev
# Runs at http://localhost:5173
```

## Vercel Deployment Settings
| Field | Value |
|---|---|
| Root Directory | mern-student-manager/frontend |
| Framework | Vite |
| Build Command | npm run build |
| Output Directory | dist |
| Env Variable | VITE_API_URL = your-backend-url/api |
