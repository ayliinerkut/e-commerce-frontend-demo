// src/pages/ProductsPage.jsx 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError('Ürünler yüklenirken bir hata oluştu.');
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Yükleniyor...</div>;
    if (error) return <div style={{ color: 'red', textAlign: 'center', padding: '50px' }}>Hata: {error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Tüm Ürünler</h1>
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px'
            }}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;