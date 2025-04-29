.PHONY: up down venv check-deps update-deps install-deps isort black mypy flake8 bandit lint test migrate serve

ifneq (,$(wildcard ./.env))
    include .env
    export
endif

VENV=.venv
PYTHON=$(VENV)/bin/python3

cmd-exists-%:
	@hash $(*) > /dev/null 2>&1 || \
		(echo "ERROR: '$(*)' must be installed and available on your PATH."; exit 1)

up:  ## Run Docker Compose services
	docker compose -f docker-compose.yml up -d

down:  ## Shutdown Docker Compose services
	docker compose -f docker-compose.yml down

venv: app/requirements.txt Makefile
	python3 -m pip install --upgrade pip setuptools wheel
	python3 -m venv $(VENV)
	$(PYTHON) -m pip install -r app/requirements.txt

check-deps:  ## Check new versions and update deps
	$(PYTHON) -m pur -r app/requirements.txt -d

update-deps:  ## Check new versions and update deps
	$(PYTHON) -m pur -r app/requirements.txt

install-deps:  ## Install dependencies
	$(PYTHON) -m pip install -r app/requirements.txt

isort:
	$(PYTHON) -m isort --check-only .

black:
	$(PYTHON) -m black --check .

mypy:
	$(PYTHON) -m mypy .

flake8:
	$(PYTHON) -m flake8 .

bandit:
	$(PYTHON) -m bandit -r app

lint: isort black mypy flake8 bandit

test:  ## Run tests
	$(PYTHON) -m pytest

migrate:  ## Apply latest alembic migrations
	$(PYTHON) -m alembic upgrade head

serve:  ## Run application server in development
	$(PYTHON) app/api.py