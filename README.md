A full-stack hospital management web application, including frontend (React) and backend (Node/Express), using PostgreSQL as the database.

🚀 Introduction

This application allows users to:

Manage user accounts (register / login)

View and process data related to patients, doctors, rooms, and more

Interact with a modern React-based interface

Use backend APIs to exchange data between the frontend and the database

This project was developed as part of my DBMS / Full-Stack Web Development coursework 🧑‍💻

<pre> ```bash Hospital_DBMS/ ├─ backend/ # Backend server ├─ src/ # React frontend source code ├─ public/ # Static frontend files ├─ input.sql # Sample SQL scripts ├─ source.sql # Main project SQL scripts ├─ package.json └─ README.md ``` </pre>
🧠 Technologies Used
Layer	Technology
Frontend	React.js
Backend	Node.js + Express
Database	PostgreSQL
Package Manager	npm
⚙️ Installation & Running the Project
🔹 1. Clone the repository
git clone https://github.com/QKhag0417/Hospital_DBMS.git
cd Hospital_DBMS

🔹 2. Install dependencies

Backend:

cd backend
npm install


Frontend:

cd ..
npm install

🔹 3. Set up the PostgreSQL database

Install PostgreSQL

Create a new database, for example:

CREATE DATABASE hospital_db;


Update the database configuration file (if applicable) with your database credentials

🔹 4. Run the backend server
cd backend
npm start

🔹 5. Run the frontend
npm start


The frontend will typically run at:

👉 http://localhost:3000
