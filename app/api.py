from fastapi import FastAPI, status, HTTPException
from app.model import ProdutoModel
from app.schema import ProdutoData, ProdutoCreate, ProdutoUpdate, Produtos
from app.db import session
from typing import List
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from prometheus_fastapi_instrumentator import Instrumentator


load_dotenv()

app = FastAPI(title='FastAPI CRUD Sample', description='Microsservice CRUD Sample, develop by Augusto Arraes')

origins = os.getenv("CORS_ORIGINS").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # [*]
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos os cabeçalhos
)


@app.post("/create", response_model=ProdutoData, status_code=status.HTTP_201_CREATED, tags=['CRUD'])
async def create_produto(produto: ProdutoCreate):
    print(str(produto))
    # Chamar aqui o Business.py... outros chamam de Service.py
    produto = ProdutoModel(nome=produto.nome, valor=produto.valor)
    session.add(produto)
    session.commit()
    return produto


@app.get("/all", tags=['CRUD'])
async def getAllProdutos():
    produtos = session.query(ProdutoModel).filter(ProdutoModel.deleted==False).all()
    return produtos


@app.get("/produto/{id}", response_model=ProdutoData, tags=['CRUD'])
def getProduto(id: int):
    produto = session.query(ProdutoModel).get(id)
    if not produto:
        raise HTTPException(status_code=404, detail=f"Item não encontrado!")
    return produto


@app.put("/update/{id}", response_model=ProdutoData, tags=['CRUD'])
def updateProduto(id: int, produtoUpd: ProdutoUpdate):
    produto = session.query(ProdutoModel).get(id)
    if not produto:
        raise HTTPException(status_code=404, detail=f"Item não encontrado!")
    if produto:
        produto.nome = produtoUpd.nome
        produto.valor = produtoUpd.valor
        session.commit()
    return produto


@app.delete("/del/{id}", tags=['CRUD'])
def deleteProduto(id: int):
    produto = session.query(ProdutoModel).get(id)
    if produto:
        produto.deleted = True
        #session.delete(produto)
        session.commit()
    else:
        raise HTTPException(status_code=404, detail=f"Item não encontrado")
    return {"msg": "Item excluído!"}


@app.get("/ping")
def ping_pong():
    return {"ping": "pong"}


Instrumentator().instrument(app).expose(app) # prometheus


# uvicorn api:app --reload
# http://127.0.0.1:8000/
# http://127.0.0.1:8000/docs

# Ref: https://github.com/matheusvclls/fast-api-crud
