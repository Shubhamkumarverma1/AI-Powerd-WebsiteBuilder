# 🤖 AI Website Builder

> Generate beautiful, ready-to-use websites from a simple text description — powered by AI.


---

## 📌 About the Project

**AI Website Builder** is a full-stack web application that allows users to describe the kind of website they want in plain English, and the AI automatically generates a fully structured, ready-to-use website layout for them — no coding required.

This project was built as part of my MCA final year curriculum to explore the intersection of AI integration and full-stack web development.

---

## ✨ Features

- 🧠 **AI-Powered Generation** — Users describe their website in simple text; AI generates the layout and content
- 🎨 **Live Preview** — Instantly see the generated website before downloading or saving
- 💾 **Save & Export** — Save generated websites to your account or export as HTML
- 👤 **User Authentication** — Register and log in to manage your generated websites
- 📁 **Project Dashboard** — View, edit, and delete all your previously generated websites
- 📱 **Responsive Design** — Works seamlessly on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| AI Integration | OpenAI API / Gemini API |
| Auth | JWT (JSON Web Tokens) |
| Version Control | Git & GitHub |

---

## 📂 Project Structure

```
ai-website-builder/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # Page-level components
│       ├── context/         # Auth and global state
│       └── App.js
├── server/                  # Node.js backend
│   ├── routes/              # API routes
│   ├── models/              # MongoDB models
│   ├── controllers/         # Business logic
│   ├── middleware/          # Auth middleware
│   └── server.js
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or above)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- An API key from [OpenAI](https://platform.openai.com/) or [Google Gemini](https://ai.google.dev/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubhamkumarverma/ai-website-builder.git
   cd ai-website-builder
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `/server` folder:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   AI_API_KEY=your_openai_or_gemini_api_key
   ```

5. **Run the application**

   Start the backend:
   ```bash
   cd server
   npm run dev
   ```

   Start the frontend (in a new terminal):
   ```bash
   cd client
   npm start
   ```

6. **Open in browser**
   ```
   http://localhost:3000
   ```

---

> ⭐ If you found this project helpful or interesting, please give it a star on GitHub!
