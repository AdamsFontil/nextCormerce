'use client'
import React from 'react';

const Product = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Shoes', price: 10.99, image: 'shoes.jpg' },
    { id: 2, name: 'Bag', price: 19.99, image: 'bag.jpg' },
    { id: 3, name: 'Purse', price: 14.50, image: 'purse.jpg' },
    { id: 4, name: 'Shirt', price: 10.99, image: 'shirt.jpg' },
    { id: 5, name: 'Watch', price: 49.99, image: 'watch.jpg' },
    { id: 6, name: 'Jacket', price: 24.50, image: 'jacket.jpg' },
  ];

  return (
    <main className='flex flex-col justify-center'>
      <div className="product-list grid grid-cols-2 md:grid-cols-3 gap-6 p-5">
        {products.map((product) => (
          <div key={product.id} className="product-details flex flex-col items-center p-5">
            <img className='w-96 h-96' src={`/pics_for_store/${product.image}`} alt={product.name} />
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
