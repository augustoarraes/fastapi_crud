import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductEdit = () => {
  const { id } = useParams(); // pegar o ID da URL
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Buscar dados do produto para preencher o form
    fetch(`http://localhost:5000/produto/${id}`)
      .then(response => response.json())
      .then(data => {
        setNome(data.nome);
        setValor(data.valor);
      })
      .catch(error => console.error('Erro ao buscar produto:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const produtoAtualizado = {
      nome: nome,
      valor: parseFloat(valor)
    };

    fetch(`http://localhost:5000/update/${id}`, {
      method: 'PUT', // ou PATCH dependendo da sua API
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(produtoAtualizado)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao editar produto');
        }
        return response.json();
      })
      .then(data => {
        console.log('Produto editado:', data);
        setMessage('Produto atualizado com sucesso!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch(error => {
        console.error('Erro:', error);
        setMessage('Erro ao editar produto.');
      });
  };

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Editar Produto</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nome:</label><br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Valor (R$):</label><br />
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </div>

        <button type="submit">Salvar Alterações</button>{' '}
        <button type="button" onClick={handleVoltar}>Voltar</button>
      </form>

      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
};

export default ProductEdit;
