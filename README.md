# LinkedIn Clone – MERN Stack Social Media Project

Welcome to the LinkedIn Clone project — a full stack social media website inspired by LinkedIn, built with the powerful MERN stack! This project demonstrates my ability to implement real-world features across frontend, backend, and database, offering a simple but robust professional networking experience.

## 🚀 Live Demo

- **Frontend (Vercel/Netlify):** [Your Live Link Here]
- **Backend (Render/Railway):** [Your Live Link Here]
- **Demo Recording:** [Demo Video](https://drive.google.com/file/d/1TaKri3H5blvNU7bFvjWFF8HkFTU1ptP3/view?usp=sharing)
- **GitHub Repo:** [https://github.com/kavyaa25/MERN-LinkedIn-Clone.git](https://github.com/kavyaa25/MERN-LinkedIn-Clone.git)

---

## 🛠 Tech Stack Used

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | React.js           |
| Backend      | Node.js, Express.js|
| Database     | MongoDB (Mongoose) |
| Styling      | Tailwind CSS / CSS3|
| Auth         | JWT & bcrypt.js    |
| Deployment   | Vercel (Frontend), Render (Backend) |

---

## ✨ Features Overview

- **User Signup & Login**
  - Secure registration with email and password (bcrypt, JWT)
  - Persistent session management
  - Logged-in user’s profile/name displayed on top bar

- **Create Post**
  - Authenticated users can publish posts with text content
  - Post items display author, text, and creation timestamp

- **View All Posts**
  - Public feed displaying posts from every user
  - Latest posts appear first for real-time experience

- **Logout**
  - One-click logout for privacy and session control

### 🥇 Bonus Features
- Like and comment buttons on posts
- Edit and delete own posts
- Individual profile page with user details
- Optional image upload with posts

---

## 📚 How to Run Locally

### Prerequisites
- Node.js & npm installed
- MongoDB running locally or Atlas URI
- Clone this repo: `git clone https://github.com/kavyaa25/MERN-LinkedIn-Clone.git`

### Environment Setup

1. **Backend Setup**
   - Navigate to server folder: `cd server`
   - Install dependencies: `npm install`
   - Create `.env` file and add:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - Start backend: `npm start` or `nodemon index.js`
   
2. **Frontend Setup**
   - Navigate to client folder: `cd client`
   - Install dependencies: `npm install`
   - Start app: `npm start`
   - Frontend runs on port `3000` by default

### Production Deployment

- **Frontend:** Deploy on Vercel or Netlify. Push code to GitHub and connect repository.
- **Backend:** Deploy using Render or Railway. Provide MongoDB Atlas connection string and environment variables.

---

## 📄 Extra Details

- All API routes are protected via JWT and bcrypt for secure user authentication.
- Posts, user profiles, likes, and comments are managed through RESTful APIs.
- Responsive design with smooth navigation for mobile and desktop users.
- Clean code structure with separate client and server folders.

---

## 🎉 Assignment Submission

- **GitHub Repo:** [https://github.com/kavyaa25/MERN-LinkedIn-Clone.git](https://github.com/kavyaa25/MERN-LinkedIn-Clone.git)
- **Live Demo:** Add your frontend/backend deployed links here.
- **Demo Video:** [Watch here](https://drive.google.com/file/d/1TaKri3H5blvNU7bFvjWFF8HkFTU1ptP3/view?usp=sharing)
- For questions, contact: hr@appdost.in

---

## 👩‍💻 About Me

Hi! I’m Kavya, a passionate full stack developer, excited about building scalable and impactful web applications with cutting-edge technologies. I enjoy tackling real-world problems, teamwork, and continuous learning. For more projects, connect on [LinkedIn](#) or check my GitHub profile!

---

## 📢 How the App Works

1. Visit the site and sign up/login
2. Create a post from your profile/dashboard
3. View and interact with the latest posts on the public feed
4. Log out securely anytime from your profile/settings

---

## 📦 Folder Structure

MERN-LinkedIn-Clone/
├── client/ # React frontend
├── server/ # Express backend
├── README.md
├── .env


---

## 🏆 Evaluation Criteria

- Working signup/login system
- Ability to create and view posts
- Clean, responsive UI
- Bonus features: like, comment, edit post, profile page

---

> *Thank you for reviewing my project! I believe this LinkedIn Clone highlights my MERN stack skills and my ability to deliver a complete, user-friendly social media web app.*

---

Kavya ✨
