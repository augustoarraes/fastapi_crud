# FullStack Microsserviço CRUD React JS e Python FastAPI

Uma Aplicação FullStack onde temos como frontend em React JS, backend em Python FastAPI e banco de dados Postgres.
- Pasta `fastapi_crud` é o backend da aplicação
- E, `frontend-react-produtos` é frontend da aplicação


## Subir a aplicação rápido

Antes de subir a aplicação, verificar as credenciais, principalmente do BD, no `docker-compose.yml` e no `.env` do backend.

```bash
docker compose up -d

# caso o FastAPI não suba de imediato
docker restart fastapi_crud
# caso queira verificar o log de execução do microsserviço
docker logs -f fastapi_crud
```

Acessando a Aplicação [http://localhost:3000](http://localhost:3000)

Agora é so ver as rotas REST disponíveis para testar o backdend direto (Swagger da API): [http://127.0.0.1:5000/docs](http://127.0.0.1:5000/docs)

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


## Boas Práticas na Codificação

Um bom pré-requisito é ter uma boa massa de dados, banco de dados local interessante para o consumo dos Endpoints.
Sempre avaliar as Regras de Negócio.

1. Sempre TESTE, regra das regras
2. Teste os Endpoints com campos vazios, diante às Regras de Negócio (RN)
3. Tratamento de Duplicidade em endpoints POST de inserção
4. Endpoints de Filtro de Consulta/Pesquisa:
4.1. Aceitar de campos nulos até cada campo para afinar o filtro da query
4.2. Fragmentar a Query a cada campo: `if campo: ... <parte da query filter SQLAlchemy>` 
4.3. De acordo com RN específicas de Filtro, operadores `or_` e `and_` do SQLAlchemy
4.4. Testar todas as possibilidades do Filtro
5. Retorne status code 400 para condições não atendidas


## Contato

Augusto Arraes
[site](http://linktr.ee/a.arraes)
