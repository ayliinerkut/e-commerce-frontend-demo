// src/App.jsx 

import axios from 'axios';
import CartPage from './pages/CartPage'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          {/* Anasayfa - Ürün Listesi */}
          <Route path="/" element={<ProductsPage />} />
          
          {/* Ürün Detay Sayfası (Dinamik route) */}
          <Route path="/product/:id" element={<ProductDetailPage />} />
          
          {/* Sepet Sayfası */}
          <Route path="/cart" element={<CartPage />} />
          
          {/* 404 Sayfası (Opsiyonel) */}
          <Route path="*" element={<h1 style={{textAlign: 'center', padding: '50px'}}>404 - Sayfa Bulunamadı</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;