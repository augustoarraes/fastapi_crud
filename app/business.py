
from app.db import session
from app.model import ProdutoModel
from app.utils import paginate


def historico(filtros, page: int=1, page_size: int=10):
    produtos = session.query(ProdutoModel).filter(ProdutoModel.deleted==False)
    # ... aplicar os friltros
    produtos, paginacao = paginate(produtos, page, page_size)
    produtos.all()
    
    json_data = []
    for item in produtos:
        data = {
                "id": item.id,
                "nome": item.nome,
                "valor": item.valor
            }
        json_data.append(data)
    
    json_data = {
            "data": json_data,
            "paginacao": paginacao
        }
    session.close()
    return json_data