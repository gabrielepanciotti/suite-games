from fastapi.testclient import TestClient

from games_backend.app import app


def test_health_endpoint_is_available() -> None:
    response = TestClient(app).get("/health")

    assert response.status_code == 200
