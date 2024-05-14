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
    descricao = Column(String)
    created = Column(DateTime, default=datetime.now().strftime("%m-%d-%Y %H:%M:%S.%f"))
    updated_at = Column(DateTime, default=datetime.now().strftime("%m-%d-%Y %H:%M:%S.%f"), onupdate=datetime.now().strftime("%m-%d-%Y %H:%M:%S.%f"))
    deleted = deferred(Column(Boolean, default=False))

