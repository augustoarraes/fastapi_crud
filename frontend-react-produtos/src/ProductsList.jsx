import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // importar hook do Router

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // criar navegação

  // Buscar produtos da API
  const fetchProducts = () => {
    fetch('http://localhost:5000/all')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Função para formatar data
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  // Função para ir para tela de cadastro
  const handleCadastrarProduto = () => {
    navigate('/cadastrar');
  };

  // Função para excluir produto
  const handleExcluirProduto = (id) => {
    const confirmDelete = window.confirm('Deseja realmente excluir este produto?');
    if (confirmDelete) {
      fetch(`http://localhost:5000/del/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao excluir produto');
          }
          // Atualiza a lista após excluir
          fetchProducts();
        })
        .catch(error => {
          console.error('Erro:', error);
          alert('Erro ao excluir produto.');
        });
    }
  };

  return (
    <div className="container">
      <h1>Lista de Produtos</h1>

      {/* Botão Cadastrar Produto */}
      <button
        style={{ marginBottom: '20px' }}
        onClick={handleCadastrarProduto}
      >
        Cadastrar Produto
      </button>

      {/* Tabela de Produtos */}
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Valor (R$)</th>
            <th>Criado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" align="center">Nenhum produto encontrado.</td>
            </tr>
          ) : (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>R$ {parseFloat(product.valor).toFixed(2)}</td>
                <td>{formatDate(product.created)}</td>
                <td>
                  <button onClick={() => navigate(`/detalhar/${product.id}`)}>Detalhar</button>{' '}
                  <button onClick={() => navigate(`/editar/${product.id}`)}>Editar</button>{' '}
                  <button onClick={() => handleExcluirProduto(product.id)}>Excluir</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
