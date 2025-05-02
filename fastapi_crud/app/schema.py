from pydantic import BaseModel, ValidationError, Field
from typing import Optional
from datetime import datetime
from typing import List


class ProdutoCreate(BaseModel):
    nome: str
    valor: float


class ProdutoData(BaseModel):
    id: int
    nome: str
    valor: float
    status: str
    estoque_min: int
    created: datetime


class Produtos(BaseModel):
    produtos: list[ProdutoData]


class ProdutoUpdate(BaseModel):
    nome: Optional[str] = None
    valor: Optional[float] = None
    status: Optional[str] = None
    estoque_min: Optional[str] = None