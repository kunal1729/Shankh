# 🔧 kunal1729-shankh

This is a full-stack application built with a **Vite + React** frontend and an **Express + MongoDB** backend.

---

## 📁 Project Structure

```
kunal1729-shankh/
├── backend/     # Node.js backend (Express, MongoDB)
└── frontend/    # Vite + React frontend
```

---

## 🚀 Installation Guide

### Prerequisites

- Node.js >= 16
- npm
- MongoDB Atlas account
- (Optional) `nodemon` for backend development

---

### 1. Backend Setup

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

#### 📄 Configure Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
PORT=8080
DATABASE_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

> Replace the placeholder values with your actual credentials.

#### Start Backend Server

```bash
# Development mode
npx nodemon index.js

# Or for production
node index.js
```

---

### 2. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

#### 📄 Optional `.env` for Frontend

If using environment variables for backend communication:

```env
VITE_BACKEND_URL=http://localhost:8080
```

Ensure API requests use `import.meta.env.VITE_BACKEND_URL`.

#### Start Frontend Development Server

```bash
npm run dev
```

---

## ⚙️ DevOps & Deployment

### Build Commands

- **Frontend Build:**

```bash
npm run build
```

- **Backend:** Use a process manager like `pm2` or containerize using Docker.

### Suggested Health Check Endpoints

- Backend: Add a simple `GET /api/health` route.
- Frontend: Verify by visiting `http://localhost:5173` (default Vite port).

### Logs

Ensure backend logs are captured from stdout/stderr. Integrate with:
- Winston + Loggly
- Logstash (ELK Stack)
- Cloud provider log streams (AWS, GCP, etc.)

---

## 🔐 Environment Variables Summary

### Backend `.env`

| Variable       | Description                            |
|----------------|----------------------------------------|
| `PORT`         | Port the backend server runs on        |
| `DATABASE_URI` | MongoDB connection string              |
| `JWT_SECRET`   | JWT secret for token signing           |
| `EMAIL_USER`   | Email address for sending OTPs         |
| `EMAIL_PASS`   | Email password / app-specific password |

### Frontend `.env` (Optional)

| Variable             | Description                     |
|----------------------|---------------------------------|
| `VITE_BACKEND_URL`   | Base URL of the backend API     |

---

## 📦 Major Dependencies

### Backend

- `express`
- `mongoose`
- `dotenv`
- `bcrypt`
- `jsonwebtoken`
- `nodemailer`
- `joi`, `joi-password-complexity`
- `cors`
- `nodemon` (for development)

### Frontend

- `react`, `react-dom`
- `vite`
- UI components and context defined in `src/components/` and `src/context/`

---

## 🧯 Troubleshooting

- **MongoDB not connecting?**
  - Check network access and credentials.
- **CORS errors?**
  - Ensure frontend origin is allowed in backend.
- **Email not sending?**
  - Confirm SMTP settings, app password or OAuth if using Gmail.

---

## ✨ Contributions & Improvements

Feel free to fork, clone, and open PRs.

---
