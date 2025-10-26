// src/pages/ProductDetailPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError('Ürün detayları yüklenirken bir hata oluştu.');
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Yükleniyor...</div>;
    if (error) return <div style={{ color: 'red', textAlign: 'center', padding: '50px' }}>Hata: {error}</div>;
    if (!product) return null;

    return (
        <div style={{ padding: '40px', display: 'flex', maxWidth: '1000px', margin: '0 auto', gap: '40px' }}>
            <div style={{ flex: 1 }}>
                <img src={product.image} alt={product.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', border: '1px solid #ddd', padding: '10px' }} />
            </div>
            <div style={{ flex: 1 }}>
                <h1>{product.title}</h1>
                <p style={{ fontSize: '1.2em', color: '#666' }}>Kategori: {product.category}</p>
                <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#007bff' }}>${product.price.toFixed(2)}</p>
                <p>{product.description}</p>
                <button
                    onClick={() => addToCart(product)}
                    style={{
                        backgroundColor: '#28a745', color: 'white', border: 'none',
                        padding: '15px 30px', borderRadius: '5px', cursor: 'pointer',
                        fontSize: '1.2em', marginTop: '20px'
                    }}
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
};

export default ProductDetailPage;