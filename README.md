# Microsserviço CRUD FastAPI

## Subir a aplicação rápido

```bash
docker compose up -d

# caso o FastAPI não suba de imediato
docker restart fastapi_crud
# caso queira verificar o log de execução do microsserviço
docker logs -f fastapi_crud
```
Agora é so ver as rotas disponíveis para testar o CRUD: `http://127.0.0.1:3000/docs`

E opcional tem a monitoração do serviço: `http://127.0.0.1:9090/`


## Banco de Dados
Sugiro ter o pgAdmin para acessar o banco de dados.
```bash
docker run --add-host=host.docker.internal:172.17.0.1 --name pgAdmin -p 8081:80 -e PGADMIN_DEFAULT_EMAIL=admin@admin.com -e PGADMIN_DEFAULT_PASSWORD=admin -d dpage/pgadmin4
```
host do banco: host.docker.internal (Se for usar algum software Admin de dados, o host é `localhost` normal) \
nome do banco: fastapiDB \
porta: 5432 \
user: postgres \
pass: sua_senha 



## Opcional para quem estiver ingressando no FastAPI
- Makefile
- app/test_api.py
- prometheus.yml


## Rodar o Test

```bash
pytest
# ou
pytest --cov=api
```


