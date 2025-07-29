# 🚀 RoamWise Backend

This is the backend for the RoamWise platform, built using **FastAPI** and connected to a **Supabase PostgreSQL** database. It supports multi-tenant shopping mall data management, including malls, stores, events, and facilities.

---

## 📁 Project Structure

```
Backend/
├── main.py               # FastAPI entry point
├── db.py                 # DB connection using SQLAlchemy
├── models/               # SQLAlchemy models
├── schemas/              # Pydantic schemas
├── crud/                 # Business logic functions
├── routes/               # API route definitions
├── .env                  # (excluded from Git) DB credentials
└── requirements.txt      # Python dependencies
```

---

## ✅ Prerequisites

- Python 3.10+
- Supabase project with Postgres and PostGIS enabled
- `.env` file configured with your DB URL

---

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/Roamwise-IT/roamwise.git
cd roamwise/Backend
```

2. **Create virtual environment**

```bash
python -m venv venv
source venv/bin/activate       # Linux/macOS
venv\Scripts\activate        # Windows
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Create `.env` file**

Create a file named `.env` in the `Backend/` directory with the following content:

```env
SUPABASE_DB_URL=postgresql://<encoded-username>:<encoded-password>@<host>:5432/postgres
```

**Note:** Do not commit `.env` to version control.

---

## ▶️ Running the Server (Dev Mode)

```bash
uvicorn main:app --reload
```

Visit the following URLs to test the API:

- Swagger UI: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- Redoc: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

## 🔄 API Endpoints Available

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| GET    | `/api/malls`   | List all malls               |
| POST   | `/api/malls`   | Create a new mall            |
|        | ...            | (More endpoints coming soon) |

---

## ⚙️ Tech Stack

- **FastAPI** – High-performance Python web framework
- **Supabase** – Postgres DB with PostGIS and JSONB support
- **SQLAlchemy** – ORM for DB interactions
- **Pydantic** – Data validation and schema generation
- **Uvicorn** – ASGI server for local development

---

## 🧪 Testing the Setup

1. Start the server:
   ```bash
   uvicorn main:app --reload
   ```

2. Open your browser at:
   - [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) for Swagger
   - [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc) for ReDoc

3. Use the POST endpoint to create a mall and verify with GET.

---

## 📌 Notes

- PostGIS must be enabled in Supabase:
  ```sql
  create extension if not exists postgis;
  ```
- Supabase credentials in `.env` should be URL-encoded.
- Example encoding tool: https://www.urlencoder.io/

---

## 📬 Contributing

1. Create a new branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Push your branch:
   ```bash
   git push origin feat/your-feature-name
   ```
3. Open a pull request on GitHub.

---

## 🧠 Future Enhancements

- Add endpoints for stores, events, and facilities
- Supabase Auth and admin role integration
- Mall discovery via geolocation queries
- Docker-based deployment or cloud hosting (Render, Fly.io)

---

## 👨‍💻 Author

Developed and maintained by the RoamWise Engineering Team.
