"""SQLAlchemy models for the Games node.

Empty on purpose: this is a fresh scaffold with no domain schema decided yet.
The DB is provisioned and migrated (see ../database/) so future domain models
land here and are picked up by `alembic revision --autogenerate` without any
extra wiring — see ../database/env.py, which imports this module to register
metadata on `suite_backend_core.Base`.
"""
from __future__ import annotations

from suite_backend_core import Base  # noqa: F401
