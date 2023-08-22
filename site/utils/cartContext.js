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
    const updatedCart = savedCart.map((cartItem) => {
      if (cartItem.name === item.name) {
        return {
          ...cartItem,
          amount: cartItem.amount + 1
        };
      }
      return cartItem;
    });

    setSavedCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const handleDecreaseQuantity = (item) => {
    const updatedCart = savedCart.map((cartItem) => {
      if (cartItem.name === item.name) {
        return {
          ...cartItem,
          amount: cartItem.amount - 1
        };
      }
      return cartItem;
    });

    setSavedCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

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

  return (
    <CartContext.Provider
      value={{
        savedCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleRemoveItem,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
