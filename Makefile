.PHONY: start backend frontend

start: backend frontend

backend:
	@echo "\033[1;34m[BE] Starting FastAPI backend...\033[0m"
	@cd Backend && uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload \
		| sed 's/^/[BE] /'

frontend:
	@echo "\033[1;32m[FE] Starting frontend...\033[0m"
	@cd Frontend && npm start
