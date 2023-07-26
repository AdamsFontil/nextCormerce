'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProducts } from '../../api/products'; // Adjust the import path based on your file structure

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data.items);
      console.log('data',data)
      console.log('products array----',data.items)
    }
    fetchProducts();
  }, []);

  return (
    <main className='flex flex-col justify-center'>
      <div className="product-list grid grid-cols-2 md:grid-cols-3 gap-6 p-5">
        {products.map((product) => (
          <div key={product.id} className="product-details flex flex-col items-center p-5">
            <Image width={720} height={720} className='w-96 h-96' src={product.imageURL} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button className='p-4 border-2 border-gray-600 bg-red-400 text-gray-600 hover:text-lg'>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Product;
