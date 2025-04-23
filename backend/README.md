# 🔧 kunal1729-shankh

This is a full-stack application built with a **Vite + React** frontend and an **Express + MongoDB** backend.

---


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

PORT=8080
DATABASE_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

# Development mode
npx nodemon index.js

# Or for production
node index.js
