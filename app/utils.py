from sqlalchemy.orm.query import Query

def paginate(query: Query, page_number: int, page_size: int):
    len = query.count()
    limit_pages_is = round(len/page_size)
    if page_number <= limit_pages_is:
        offset = (page_number - 1) * page_size
        end_index = offset + page_size
        query = query.slice(offset, end_index)
    else:
        offset = limit_pages_is * page_size
        query = query.slice(offset, len)
    paginacao = {
                "page_number": page_number,
                "page_size": len if len < page_size else page_size,
                "total_registros": len,
                }
    return query, paginacao