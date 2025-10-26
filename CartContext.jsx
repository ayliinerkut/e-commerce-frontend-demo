// src/context/CartContext.jsx

import React, { createContext, useState, useContext } from 'react';

// 1. Context oluşturma
const CartContext = createContext();

// 2. Özel Hook (Kolay erişim için)
export const useCart = () => {
    return useContext(CartContext);
};

// 3. Provider bileşeni
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Sepete ürün ekleme fonksiyonu
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // Ürün zaten sepetteyse adedi artır
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Yeni ürünse adedi 1 ile ekle
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Sepetten ürün kaldırma fonksiyonu
    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Sepet toplamını hesaplama
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const contextValue = {
        cartItems,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        // (Opsiyonel: quantity artırma/azaltma fonksiyonlarını buraya ekleyebilirsiniz)
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
export default useCart;