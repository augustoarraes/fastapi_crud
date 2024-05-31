"""Adicionar coluna descricao

Revision ID: 93b51c8488c2
Revises: e0685b990897
Create Date: 2024-05-14 10:01:02.742293

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '93b51c8488c2'
down_revision: Union[str, None] = 'e0685b990897'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def column_exists(table_name, column_name):
    conn = op.get_bind()
    query = sa.text(
        "SELECT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name=:table AND column_name=:column)"
    ).bindparams(table=table_name, column=column_name)
    result = conn.execute(query).scalar()
    return result

def upgrade() -> None:
    try:
        if not column_exists('Produto', 'descricao'):
            op.add_column('Produto', sa.Column('descricao', sa.String))
    except Exception as e:
        print(f"Error adding column: {e}")


def downgrade() -> None:
    pass
