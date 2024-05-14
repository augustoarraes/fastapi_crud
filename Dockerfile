FROM python:3.9.19-alpine

LABEL maintainer="Augusto Arraes <arraes.augusto@gmail.com>"

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app
 
COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .

EXPOSE 3000

# Dar permissão de execução ao script
RUN chmod +x start.sh

# Command to run the application
CMD ["/app/start.sh"]


# Run Container alone:
# docker build -t fastapi.crud .
# docker run --name fastapi.crud --add-host=host.docker.internal:172.17.0.1 -v ${PWD}/:/app -p 3000:3000 -d fastapi.crud
#
# http://127.0.0.1:3000/
# http://127.0.0.1:3000/docs