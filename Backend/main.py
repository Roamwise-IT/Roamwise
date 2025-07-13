from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "http://127.0.0.1:8000/docs - to test docs"}
