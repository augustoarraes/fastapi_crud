import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductCreate from './ProductCreate';
import ProductEdit from './ProductEdit';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav>
          <Link to="/">Lista de Produtos</Link> |{' '}
          <Link to="/cadastrar">Cadastrar Produto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/cadastrar" element={<ProductCreate />} />
          <Route path="/editar/:id" element={<ProductEdit />} />
          <Route path="/detalhar/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
