import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // importar navegação

const ProductCreate = () => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // criar navegação

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
      nome: nome,
      valor: parseFloat(valor)
    };

    fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoProduto)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao cadastrar produto');
        }
        return response.json();
      })
      .then(data => {
        console.log('Produto cadastrado:', data);
        setMessage('Produto cadastrado com sucesso!');
        
        // Aguarda 1 segundo e volta para a lista
        setTimeout(() => {
          navigate('/');
        }, 500);
      })
      .catch(error => {
        console.error('Erro:', error);
        setMessage('Erro ao cadastrar produto.');
      });
  };

  // Função para botão Voltar
  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Cadastrar Produto</h1>

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

        <button type="submit">Salvar Produto</button>{' '}
        <button type="button" onClick={handleVoltar}>Voltar</button>
      </form>

      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
};

export default ProductCreate;
