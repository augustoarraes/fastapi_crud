from fastapi.testclient import TestClient
from api import app


client = TestClient(app)


def test_get_produtos():
    res = client.get("/all", headers={"X-Token": "hash_sample"})
    assert res.status_code == 200
    

def test_create_produto():
    res = client.post("/create", headers={"X-Token": "hash_sample"},
                      json={ "nome": "cell", "valor": 200})
    assert res.status_code == 201
    #assert res.json() == {"id": 3 , "nome": "cell", "valor": 200}