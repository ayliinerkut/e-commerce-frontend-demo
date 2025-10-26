// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { totalItems } = useCart();

    return (
        <header style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '15px 30px', backgroundColor: '#343a40', color: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold' }}>
                ReactShop
            </Link>
            <nav>
                <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
                    Ürünler
                </Link>
                <Link to="/cart" style={{ color: 'white', textDecoration: 'none', position: 'relative' }}>
                    Sepet ({totalItems})
                </Link>
            </nav>
        </header>
    );
};

export default Header;