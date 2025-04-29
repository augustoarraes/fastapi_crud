import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/produto/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Produto detalhado:', data);
        setProduto(data);
      })
      .catch(error => {
        console.error('Erro ao buscar produto:', error);
      });
  }, [id]);

  const handleVoltar = () => {
    navigate('/');
  };

  if (!produto) {
    return (
      <div className="container">
        <h1>Detalhar Produto</h1>
        <p>Carregando...</p>
        <button onClick={handleVoltar}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Detalhar Produto</h1>

      <div style={{ marginBottom: '20px' }}>
        <p><strong>ID:</strong> {produto.id}</p>
        <p><strong>Nome:</strong> {produto.nome}</p>
        <p><strong>Valor (R$):</strong> {parseFloat(produto.valor).toFixed(2)}</p>
        <p><strong>Criado em:</strong> {produto.created ? new Date(produto.created).toLocaleDateString('pt-BR') : '-'}</p>
      </div>

      <button onClick={handleVoltar}>Voltar</button>
    </div>
  );
};

export default ProductDetail;
