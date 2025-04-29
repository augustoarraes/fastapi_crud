#FROM tiangolo/uvicorn-gunicorn:python3.9-alpine3.14
FROM python:3.9.19-alpine

LABEL maintainer="Augusto Arraes <arraes.augusto@gmail.com>"

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app
 
COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .

EXPOSE 5000

# --reload
CMD ["uvicorn", "app.api:app", "--reload", "--host", "0.0.0.0", "--port", "5000"]


# Run Container alone:
# docker build -t fastapi.crud .
# docker run --name fastapi.crud --add-host=host.docker.internal:172.17.0.1 -v ${PWD}/:/app -p 5000:5000 -d fastapi.crud
#
# http://127.0.0.1:5000/
# http://127.0.0.1:5000/docs