# 🏥 Hospital_DBMS

Một hệ thống quản lý bệnh viện full-stack web app, gồm cả **frontend (React)** và **backend (Node/Express)**, sử dụng **PostgreSQL** làm cơ sở dữ liệu.

---

## 🚀 Giới thiệu

Ứng dụng cho phép:

- Quản lý người dùng (đăng ký / đăng nhập)
- Xem và xử lý dữ liệu bệnh nhân, bác sĩ, phòng ốc…
- Giao diện React hiện đại
- API backend để phục vụ dữ liệu cho frontend

Đây là đồ án môn **DBMS / Full-Stack Web Development** của mình 🧑‍💻

---

## 📂 Cấu trúc thư mục

Hospital_DBMS/
├─ backend/ # Backend server
├─ src/ # Frontend React app
├─ public/ # Files tĩnh frontend
├─ input.sql # SQL scripts mẫu
├─ source.sql # SQL scripts dự án
├─ package.json
└─ README.md

yaml
Copy code

---

## 🧠 Công nghệ sử dụng

| Phần | Công nghệ |
|------|-----------|
| Frontend | React.js |
| Backend | Node.js + Express |
| Database | PostgreSQL |
| Quản lý gói | npm |

---

## ⚙️ Cài đặt & chạy

### 🔹 1. Clone repo

```bash
git clone https://github.com/QKhag0417/Hospital_DBMS.git
cd Hospital_DBMS
🔹 2. Cài đặt dependencies
Backend:

bash
Copy code
cd backend
npm install
Frontend:

bash
Copy code
cd ..
npm install
🔹 3. Thiết lập database PostgreSQL
Cài PostgreSQL

Tạo database mới, ví dụ:

sql
Copy code
CREATE DATABASE hospital_db;
Chỉnh file config (nếu có) để kết nối database

🔹 4. Chạy backend
bash
Copy code
cd backend
npm start
🔹 5. Chạy frontend
bash
Copy code
npm start
Frontend mặc định sẽ mở ở:

👉 http://localhost:3000
