# 📚 Find My Notes

A public note-sharing web app built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. Users can **sign up, upload, search, and download PDF notes** – similar to a public version of Google Drive.

---

## 🌟 Features

- 🔐 User authentication with JWT
- 📝 Upload notes (PDF) with title, description, and tags
- 🔍 Search notes by keywords or tags
- 👤 View and update user profile
- 🖼 Upload profile photo
- 📂 View all uploaded notes on your profile

---
## 🛠 Tech Stack

**Frontend:** React.js  
**Backend:** Node.js, Express.js  
**Database:** MongoDB Atlas  
**File Upload:** Multer + Cloudinary or Local Storage  
**Authentication:** JWT

---

## 📁 Project Structure


---
## ⚙️ Setup Instructions

### ✅ Prerequisites

- Node.js v16+
- npm or yarn
- MongoDB Atlas account
- Cloudinary account (optional for image/PDF storage)

### 🔐 Environment Variables

Create a `.env` file in the `server/` directory with:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

*TO RUN BACKEND*
cd server
npm install
nodemon index.js

*TO RUN FRONTEND*
cd client
npm install
npm start
