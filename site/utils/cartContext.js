'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [savedCart, setSavedCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setSavedCart(cartData);
  }, []);

  const handleIncreaseQuantity = (item) => {
    const itemIndex = savedCart.findIndex((cartItem) => cartItem.name === item.name);

    if (itemIndex !== -1) {
      const updatedCart = [...savedCart];
      updatedCart[itemIndex].amount += 1;

      setSavedCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const newItem = {
        ...item,
        amount: 1,
      };

      const updatedCart = [...savedCart, newItem];

      setSavedCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };



  const handleDecreaseQuantity = (item) => {
    const itemIndex = savedCart.findIndex((cartItem) => cartItem.name === item.name);

    if (itemIndex !== -1) {
      const updatedCart = [...savedCart];
      updatedCart[itemIndex].amount -= 1;

      setSavedCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const newItem = {
        ...item,
        amount: 1,
      };

      const updatedCart = [...savedCart, newItem];

      setSavedCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const handleRemoveItem = (item) => {
    const updatedCart = savedCart.filter((cartItem) => cartItem.name !== item.name);

    setSavedCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const totalPrice = () => {
    let totalPrice = 0;

    savedCart.forEach((item) => {
      totalPrice += item.price * item.amount;
    });

    return totalPrice.toFixed(2);
  }

  const totalItems = () => {
    let totalItems = 0;

    savedCart.forEach((item) => {
      totalItems += item.amount;
    });

    return totalItems;
  }

  const clearCart = () => {
    console.log('clearing cart');
    localStorage.removeItem('cart');
    setSavedCart([]);
  };


  return (
    <CartContext.Provider
      value={{
        savedCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleRemoveItem,
        totalPrice,
        totalItems,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
