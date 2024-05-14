#!/bin/sh

echo "Initializing dependencies..."

echo "Running required Migrations..."
alembic upgrade head

uvicorn app.api:app --reload --host 0.0.0.0 --port 8000