# Portfolio-Management-Web-App

This is a **full-stack portfolio web application** for Ankit Kumar. It showcases projects, skills, certifications, and contact information. The app is built using **React** for the frontend, **Node.js/Express** for the backend, and **MongoDB** for the database.

---

## Features

### Frontend
- Responsive portfolio website built in **React**
- Sections:
  - Home (Hero section, brief intro)
  - Projects (Dynamic projects from API)
  - Skills & Tools (Categorized skill bars and tools)
  - Certifications
  - Contact (Email, social links)
- Interactive **social icons** (GitHub, LinkedIn, Instagram)
- Modern UI/UX with dark theme

### Backend
- **Node.js** with **Express.js** REST API
- **MongoDB** database for storing:
  - Projects
  - Skills
  - Tools
  - Certifications
  - Social links
  - Contact information
- API Endpoints:
  - `GET /api/tools`
  - `GET /api/certifications`
  - `GET /api/contact`
  - `GET /api/social`
  - `GET /api/projects`
  - `GET /api/skills`

---

## Folder Structure
PORTFOLIO MANAGEMENT WEB APP/
│
├─ portfolio-Backend-Admin/
│ ├─ models/
│ ├─ routes/
│ ├─ server.js
│ └─ package.json
│
├─ portfolio-frontend/
│ ├─ src/
│ │ ├─ components/
│ │ ├─ pages/
│ │ ├─ App.js
│ │ ├─ index.js
│ │ └─ App.css
│ └─ package.json
│
└─ README.md


---

## Installation

### Backend

## Navigate to the backend folder:
cd portfolio-Backend-Admin
npm install

Create a .env file and add your MongoDB connection
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
SESSION_SECRET=your_session_secret_here
ADMIN_USER=your_admin_username_here
ADMIN_PASS=your_admin_password_here
Start the backend server:
npm start

## Navigate to the front folder:
cd portfolio-frontend
npm install
npm start

## Technologies Used
Frontend: React, React Router, CSS
Backend: Node.js, Express.js
Database: MongoDB
Icons: react-icons (GitHub, LinkedIn, Instagram)
Usage
Add projects, skills, tools, certifications, and social links in MongoDB.
Frontend fetches data dynamically from API.
Social icons link to GitHub, LinkedIn, and Instagram.
Skills are displayed with progress bars.
Projects include description, tech stack, live demo link, and GitHub link.





