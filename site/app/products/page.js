'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProducts } from '../../api/products'; // Adjust the import path based on your file structure


const Product = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log('cart', cart);

  useEffect(() => {
    // Load cart items from localStorage on component mount
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    console.log('saved cart', savedCart);
    console.log('current cart', cart); // Log the cart here to see the updated state

    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data.items);
      console.log('data', data);
      console.log('products array----', data.items);
    }
    fetchProducts();
  }, []);



  const cartButton = async (product) => {
    // Update local storage first
    let updatedCart = [];

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.name === product.name);

    if (existingItemIndex !== -1) {
      // If it exists, find the item in the cart and update its amount
      updatedCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, amount: item.amount + 1 }; // Increase the amount by 1
        } else {
          return item;
        }
      });
    } else {
      // If it doesn't exist, add the item to the cart with an initial amount of 1
      updatedCart = [
        ...cart,
        { name: product.name, price: product.price, amount: 1 },
      ];
    }

    await localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Then update the cart state
    setCart(updatedCart);
  };






  return (
    <main className='flex flex-col justify-center'>
      <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {products.map((product) => (
          <div key={product.id} className="card max-w-96 bg-base-100 shadow-xl">
            <Image width={720} height={720} className='w-96 h-96' src={`/Pics_for_store/${product.name}.jpg`} alt={product.name} />

            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <div className="card-actions justify-end">
                <button onClick={() => cartButton(product)} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Product;
