# 🌍 Roamwise

Roamwise is a modern full-stack application that combines a powerful FastAPI backend with a cross-platform React Native (Expo) frontend. Designed to be scalable and developer-friendly, it helps users seamlessly connect and explore travel-related features.

---

## 🚀 Tech Stack

- **Frontend:** React Native (Expo)
- **Backend:** FastAPI (Python)
- **Containerization:** Docker
- **Version Control:** Git & GitHub

---

## 🧩 Project Structure

roamwise/
├── Backend/       # FastAPI backend with Docker setup
│   ├── main.py
│   ├── Dockerfile
│   ├── requirements.txt
│   └── ...
├── Frontend/      # React Native (Expo) frontend
│   ├── app/
│   ├── components/
│   ├── assets/
│   └── ...
├── .gitignore
└── README.md

---

## ⚙️ Backend (FastAPI)

### 🚢 Run locally (with Docker)

cd Backend
docker build -t fastapi-backend .
docker run -d -p 8000:8000 fastapi-backend

### 🌐 API docs

Once running, access:

- Main endpoint: http://localhost:8000
- Swagger UI: http://localhost:8000/docs

---

## 💻 Frontend (React Native)

### ▶️ Run locally

cd Frontend
npx expo start

- Use **Expo Go** on your mobile device to scan the QR code.
- Supports live reloading for rapid development.

---

## 🐳 Docker Compose (optional)

If you prefer using Docker Compose to orchestrate the backend and other future services, create a docker-compose.yml file and start with:

docker compose up --build

---

## ✉️ Future Enhancements

- Integrate authentication (JWT)
- Add database support (e.g., PostgreSQL)
- Connect frontend to backend (API integration)
- CI/CD pipelines (GitHub Actions)
- Production-ready Expo builds

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## ✨ Acknowledgements

- FastAPI: https://fastapi.tiangolo.com/
- React Native: https://reactnative.dev/
- Expo: https://expo.dev/
- Docker: https://www.docker.com/

---

### 🌟 Happy coding and happy roaming!
