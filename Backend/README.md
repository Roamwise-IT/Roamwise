# FastAPI Backend

This is the backend service for the Roamwise platform, built with [FastAPI](https://fastapi.tiangolo.com/). It handles API routes, authentication, data processing, and communication with the database.

---

## 🧰 Installation

Make sure you have Python 3.9+ installed.

Install all required packages using:

```bash
pip install -r requirements.txt
```

This installs FastAPI, Uvicorn (for running the server), and any other dependencies defined for the project.

---

## 🚀 Starting the Server

Run the development server with:

```bash
uvicorn app.main:app --reload
```

- `app.main:app` tells Uvicorn to look for the FastAPI app instance inside `app/main.py`.
- `--reload` enables auto-reloading when files change (great for development).

Once running, the API will be live at:  
[http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 📘 API Documentation

FastAPI auto-generates interactive documentation:

- **Swagger UI**:  
  [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)  
  This provides a UI for testing endpoints directly in your browser.

- **ReDoc**:  
  [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)  
  A clean, read-only API reference.

These are useful for developers working on the frontend or integrating third-party services.

---

## 🧪 Running Tests

To run backend tests:

```bash
pytest
```

Make sure your test files follow the standard naming convention (e.g. `test_*.py`). You can add more tests in a `tests/` directory.

---

## 🛠 Project Structure (Example)

```
app/
├── main.py          # FastAPI app instance and route mounting
├── routes/          # API route definitions
├── models/          # Pydantic models or SQLAlchemy ORM models
├── services/        # Business logic and helper functions
├── db/              # Database connection and session handling
└── auth/            # Authentication utilities (JWT, OAuth, etc.)
```

---

## 📦 Environment Setup (Optional)

You can manage secrets and config using a `.env` file and [python-dotenv](https://pypi.org/project/python-dotenv/):

```
DATABASE_URL=postgresql://user:password@localhost/dbname
SECRET_KEY=your-secret-key
```

---

## ✨ Notes

- For production, remove `--reload` and use a proper ASGI server like Gunicorn with Uvicorn workers.

---

## 📬 Contact

For questions or contributions, reach out via the main Roamwise repo or open an issue.
