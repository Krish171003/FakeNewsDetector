# 📰 Fake News Detection Web App

This project is a full-stack Fake News Detector that verifies news content using a hybrid approach:
- ✅ **NewsData.io API** for real-time verification
- 🧠 **Machine Learning model** (Scikit-learn + Flask API) as a fallback

---

## 🔗 Live Demo (if deployed)
Frontend: [https://your-frontend-url.com](https://your-frontend-url.com)  
Backend (Node.js): [https://your-backend-api.com](https://your-backend-api.com)  
ML API (Flask): [https://your-ml-api.com](https://your-ml-api.com)

---

## 📁 Project Structure

```
FackNewsDetector/
├── client/               # React Frontend
├── server/               # Node.js Express Backend
├── ml-model-api/         # Flask ML API
└── README.md
```

---

## ⚙️ Tech Stack

- 🔥 React + TailwindCSS (Frontend)
- ⚙️ Node.js + Express (Backend API)
- 🧠 Python + Flask + Scikit-learn (ML Model API)
- 📡 NewsData.io API (Fact-checking news database)

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/FakeNewsDetector.git
cd FakeNewsDetector
```

---

### 2️⃣ Frontend Setup (React)

```bash
cd client
npm install
npm run dev        # or npm start (if using CRA)
```

Update `.env` in `client/` (Vite or CRA):

```env
VITE_API_URL=https://your-backend-api.com  # for Vite
# or
REACT_APP_API_URL=https://your-backend-api.com  # for CRA
```

---

### 3️⃣ Backend Setup (Node.js + Express)

```bash
cd ../server
npm install
```

Create a `.env` file inside `server/`:

```env
NEWS_API_KEY=your_newsdata_api_key
ML_API_URL=https://your-ml-api.com/predict
PORT=5000
```

Run server:
```bash
node index.js
```

---

### 4️⃣ ML Model API (Python + Flask)

```bash
cd ../ml-model-api
pip install -r requirements.txt
```

Ensure the model files exist:
```
ml-model-api/
└── model/
    ├── fake_news_model.pkl
    └── vectorizer.pkl
```

Run ML API:

```bash
python app.py
```

---

## 🧠 Training the ML Model

If needed, retrain the model using:
```bash
cd ml-model-api/model
python train_model.py
```

This will generate:
- `fake_news_model.pkl`
- `vectorizer.pkl`

Move these into `ml-model-api/model/`

---

## 🌐 Deployment Guide

Use platforms like **Render**, **Vercel**, **Netlify**, or **Railway**.

### 🔁 Replace `localhost` with deployed URLs:

In:
- React (`client/src/components/NewsForm.jsx`)
- Node backend `.env` (`ML_API_URL`)
- Any hardcoded URLs

Example:

```js
// before
const res = await axios.post("http://localhost:5000/api/check-news", { content });

// after
const res = await axios.post("https://your-backend-api.com/api/check-news", { content });
```

---

## ✅ Features

- ✅ Paste news text and check its credibility
- ✅ Shows if news is real/fake/unknown
- ✅ Highlights matched sources from NewsData
- ✅ Fallback to ML model when APIs fail
- ✅ Stylish and responsive UI with TailwindCSS

---

## 📌 To-Do / Improvements

- [ ] Add user authentication
- [ ] Save verified history per user
- [ ] Better ML model with deep learning
- [ ] Add support for URLs or full articles


## 🙌 Acknowledgements

- [NewsData.io API](https://newsdata.io/)
- [Scikit-learn](https://scikit-learn.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Render](https://render.com/)