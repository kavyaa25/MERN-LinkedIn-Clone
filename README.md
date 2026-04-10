# 💼 LinkedIn Clone – MERN Stack Social Media App

A **full-stack social media web application** inspired by LinkedIn, built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
This project demonstrates my ability to build **real-world applications with authentication, APIs, and dynamic UI**.

---

## 📌 Overview

This is a **simple LinkedIn-like social media application** where users can:

* Sign up and log in securely
* Create and share posts
* View posts from other users

It focuses on **core social media features**, clean UI, and **full-stack development skills**.

---

## 🎯 Why I Built This Project

* To practice **full-stack MERN development**
* To understand **authentication (JWT) and security**
* To build **REST APIs and connect frontend with backend**
* To create a **real-world social media application**

---

## 🛠️ Tech Stack

| Layer      | Technology          |
| ---------- | ------------------- |
| Frontend   | React.js            |
| Backend    | Node.js, Express.js |
| Database   | MongoDB (Mongoose)  |
| Styling    | CSS / Tailwind CSS  |
| Auth       | JWT, bcrypt.js      |
| Deployment | Vercel, Render      |

---

## ✨ Core Features

### 🔐 Authentication

* User **Signup & Login**
* Password hashing using **bcrypt**
* Secure authentication using **JWT tokens**
* Session handling for logged-in users

---

### 📝 Post Functionality

* Create posts with text content
* View posts from all users
* Display post author, content, and timestamp

---

### 🌐 Feed

* Public feed showing all posts
* Latest posts appear first
* Real-time-like user experience

---

### 🚪 Logout

* Secure logout functionality
* Clears session/token

---

## 🥇 Additional Features

* 👍 Like posts
* 💬 Comment on posts
* ✏️ Edit/Delete own posts
* 👤 User profile page
* 🖼️ Optional image upload

---

## ⚙️ How I Implemented This Project

### 1. Backend (Node.js + Express)

* Built REST APIs for:

  * Authentication (login/signup)
  * Posts (create, read, update, delete)
* Used **JWT middleware** to protect routes
* Used **bcrypt** for password encryption

---

### 2. Database (MongoDB)

* Designed schemas for:

  * Users
  * Posts
* Used **Mongoose** for data modeling and queries

---

### 3. Frontend (React.js)

* Built UI using **component-based architecture**
* Managed state using React hooks
* Connected to backend APIs using **fetch/axios**
* Handled login state and token storage

---

### 4. API Integration

* Sent requests to backend endpoints
* Passed JWT token in headers
* Displayed dynamic data in UI

---

### 5. Authentication Flow

1. User signs up/logs in
2. Backend returns JWT token
3. Token stored on client side
4. Used for authenticated API requests

---

### 6. UI & Responsiveness

* Designed clean UI using **CSS/Tailwind**
* Used **Flexbox/Grid** for layout
* Responsive for mobile and desktop

---

## 📂 Folder Structure

```bash
MERN-LinkedIn-Clone/
│
├── client/        # React frontend
├── server/        # Express backend
├── README.md
└── .env
```

---

## 📚 How to Run Locally

### 🔹 Prerequisites

* Node.js installed
* MongoDB (local or Atlas)

---

### 🔹 Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

Run server:

```bash
npm start
```

---

### 🔹 Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 📈 Future Improvements

* Real-time chat 💬
* Notifications 🔔
* Profile image upload 📸
* Infinite scroll / pagination 📜

---

## 🧠 Key Learnings

* Full-stack MERN architecture
* Authentication & authorization
* REST API development
* Database schema design
* Frontend-backend integration

---

## 📌 Final Summary

**This LinkedIn Clone is a full-stack MERN application where users can sign up, log in, create posts, and interact with others, showcasing my ability to build scalable and real-world web applications.**

---

## 👩‍💻 About Me

Hi, I’m **Kavya**, a passionate **Full Stack Developer** skilled in building modern web applications using the MERN stack.
I enjoy solving real-world problems and continuously learning new technologies.

---

## 📢 How the App Works

1. Sign up or log in
2. Create and share posts
3. View posts from other users
4. Like, comment, or manage your posts
5. Logout securely

---

> ⭐ *Thank you for reviewing my project! This project reflects my practical knowledge of MERN stack development and building real-world applications.*
