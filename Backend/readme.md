# RoamWise Backend

This repository contains the backend for the **RoamWise** application. It uses **FastAPI**, **SQLAlchemy**, and connects to a **Supabase PostgreSQL** database.

---

## 🐳 Running with Docker

### 1. Clone the repository

```bash
git clone https://github.com/<your-org>/roamwise.git
cd roamwise/Backend
```

### 2. Add `.env`

Create a `.env` file in the **root** of the project and copy in your Supabase credentials:

```
SUPABASE_DB_URL=postgresql://user:password@host:5432/dbname
```

### 3. Run the backend

```bash
docker-compose up --build
```

### 3.1 After Initial Buil

```bash
docker-compose up
```


You should see logs showing that FastAPI has started on:

```
http://0.0.0.0:8000
```

But use this instead in your browser:

```
http://localhost:8000/docs
```

This will open Swagger UI with all API endpoints.

---

## 📱 Mobile Device & Team Testing

To test the backend API on a **physical device (phone)**:

### ✅ OPTION 1: Same Wi-Fi network (local IP)

1. Run `ipconfig` on Windows or `ifconfig` on macOS/Linux to get your IP.

2. Find something like:

```
IPv4 Address: 192.168.1.5
```

3. Update your **frontend Axios base URL**:

(there, many files where it is refrenced to find and replace like the example)
```ts
const api = axios.create({
  baseURL: "http://192.168.1.5:8000/api", // Replace with your actual IP
});
```

4. Make sure the backend container is running.

5. Ensure your firewall allows incoming requests to port 8000.

6. Connect your phone to the same Wi-Fi and run the Expo app.

---

### 🌍 OPTION 2(TO BE DISCUSSED)(via `ngrok`)

Install `ngrok`: https://ngrok.com/download

```bash
ngrok http 8000
```

This will give you a public HTTPS URL like:

```
https://abcd1234.ngrok.io
```

Update your frontend Axios config to:

```ts
const api = axios.create({
  baseURL: "https://abcd1234.ngrok.io/api",
});
```

Your teammates can now connect from anywhere without needing to run the backend.

---

## 🧪 Tech Stack

- FastAPI
- SQLAlchemy
- Supabase PostgreSQL
- Docker & Docker Compose
- Axios for API communication
- React Native (Expo) frontend

---

## 🛠 Helpful Commands

### Rebuild Docker Image

```bash
docker-compose up --build
```

### Stop the backend

```bash
docker-compose down
```

---

## 📂 Project Structure

```
Backend/
  ├── db.py
  ├── main.py
  ├── models/
  ├── routes/
  ├── schemas/
  ├── Dockerfile
  ├── requirements.txt

docker-compose.yml
.env
```

---

## ✅ Ready for PR

Make sure your teammates:
- Pull latest changes
- Have Docker Desktop installed
- Run `docker-compose up --build`
- Use your IP or `ngrok` to test from mobile or remote

