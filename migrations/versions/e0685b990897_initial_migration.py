"""Initial migration

Revision ID: e0685b990897
Revises: 
Create Date: 2024-05-14 01:35:55.556365

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from datetime import datetime

# revision identifiers, used by Alembic.
revision: str = 'e0685b990897'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('Produto', sa.Column('updated_at', sa.DateTime, default=datetime.now().strftime("%m-%d-%Y %H:%M:%S.%f"), onupdate=datetime.now().strftime("%m-%d-%Y %H:%M:%S.%f")))


def downgrade() -> None:
    pass
