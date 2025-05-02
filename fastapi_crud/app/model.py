from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime
from sqlalchemy.orm import deferred
from sqlalchemy.dialects import postgresql
from app.db import Base
from datetime import datetime


class ProdutoModel(Base):
    __tablename__ = "Produto"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String)
    valor = Column(Float, default=0)
    status = Column(String, default='A')
    estoque_min = Column(Integer, default=100)
    created = Column(DateTime, default=datetime.now().strftime("%m-%d-%Y %H:%M:%S.%f"))
    deleted = deferred(Column(Boolean, default=False))

