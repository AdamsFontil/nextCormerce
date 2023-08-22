'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { CartContext } from '../../utils/cartContext'; // Import CartContext, not CartProvider


const Cart = () => {
  const { savedCart, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveItem, totalPrice } = useContext(CartContext);


  return (
    <main className='flex align-middle p-5 flex-col gap-3'>
      <h1 className='md:text-4xl flex justify-center'>Items in your cart</h1>


      <div className="overflow-x-auto p-5 align-middle">
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {savedCart.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                      <Image width={240} height={240} className='w-24 h-24' src={`/Pics_for_store/${item.name}.jpg`} alt={item.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.description}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.price}
                </td>
                <td>
                <button onClick={() => handleDecreaseQuantity(item)} className="btn btn-ghost btn-xs" disabled={item.amount === 1}>-</button>
                  {item.amount}
                  <button onClick={() => handleIncreaseQuantity(item)} className="btn btn-ghost btn-xs">+</button>
              </td>
                <th>
                  <button onClick={() => handleRemoveItem(item)} className="btn btn-ghost btn-xs">Remove</button>
                </th>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
      <div className="stats bg-primary text-primary-content ">

        <div className="stat">
          <div className="stat-title">Total</div>
          <div className="stat-value">{totalPrice()}</div>
          <div className="stat-actions flex gap-2">
            <Link href='/checkout'><button className="btn btn-sm btn-success">Checkout</button></Link>
            <Link href={'/products'} ><button className="btn btn-sm">Continue Shopping</button> </Link>
          </div>
        </div>

      </div>
      {/* <div className='btn btn-primary'>Checkout</div> */}
    </main>
  );
};

export default Cart;
