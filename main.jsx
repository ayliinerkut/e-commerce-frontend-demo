// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Varsayılan CSS dosyanızı kullanın
import { CartProvider } from './context/CartContext.jsx'; // Context Provider'ı import ediyoruz

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* CartProvider ile tüm uygulamayı sarmalayarak sepet durumunu global hale getiriyoruz */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
);