// src/pages/CartPage.jsx

import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, totalPrice, removeFromCart } = useCart();

    if (cartItems.length === 0) {
        return <div style={{ textAlign: 'center', padding: '50px' }}>Sepetinizde ürün bulunmamaktadır.</div>;
    }

    return (
        <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <h1>Alışveriş Sepeti</h1>
            {cartItems.map(item => (
                <div key={item.id} style={{
                    display: 'flex', borderBottom: '1px solid #eee', padding: '15px 0',
                    alignItems: 'center'
                }}>
                    <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '20px' }} />
                    <div style={{ flexGrow: 1 }}>
                        <h3 style={{ margin: 0 }}>{item.title}</h3>
                        <p style={{ color: '#666' }}>Fiyat: ${item.price.toFixed(2)}</p>
                        <p>Adet: {item.quantity}</p>
                    </div>
                    <p style={{ fontWeight: 'bold', minWidth: '100px', textAlign: 'right' }}>
                        Toplam: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                            backgroundColor: '#dc3545', color: 'white', border: 'none',
                            padding: '5px 10px', borderRadius: '5px', cursor: 'pointer',
                            marginLeft: '20px'
                        }}
                    >
                        Kaldır
                    </button>
                </div>
            ))}
            <div style={{
                marginTop: '20px', borderTop: '2px solid #343a40', paddingTop: '15px',
                textAlign: 'right', fontSize: '1.5em'
            }}>
                **Genel Toplam: ${totalPrice.toFixed(2)}**
            </div>
            <button style={{
                width: '100%', backgroundColor: '#007bff', color: 'white', border: 'none',
                padding: '15px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px',
                fontSize: '1.2em'
            }}>
                Ödeme Sayfasına Git (Demo)
            </button>
        </div>
    );
};

export default CartPage;