# 🗒️ Notes App

A minimal, fast notes application built with **React** and **Vite**. Create and manage notes with a simple UI. Comes with an optional mock API using `json-server` for quick local development.

> Built with the React + Vite setup (HMR, ESLint). 

---

## ✨ Features

- Create, edit, and delete notes
- Lightweight, responsive UI
- Optional mock REST API via `json-server` using `db.json`
- Developer-friendly tooling (Vite, ESLint)

---

## 🏗️ Tech Stack

- **Frontend:** React + Vite
- **Styling:** CSS
- **Tooling:** ESLint

---

## 📁 Project Structure

notes-app/
├─ src/ # React components & app logic
├─ index.html # Vite entry HTML
├─ db.json # Mock API data (json-server)
├─ eslint.config.js # Lint rules
├─ vite.config.js # Vite config
├─ package.json # Scripts & deps
└─ README.md

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** (or pnpm/yarn)

### 1) Install dependencies
```bash
npm install
```

### 2) Run the server
```bash
npm run dev
```

---

## 🔌 Mock API Usage (json-server)

Start the server

```bash
npx json-server --watch db.json --port 3001
```
