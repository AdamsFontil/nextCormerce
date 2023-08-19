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
      console.log('data', data);
      console.log('products array----', data.items);
    }
    fetchProducts();
  }, []);

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
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Product;
