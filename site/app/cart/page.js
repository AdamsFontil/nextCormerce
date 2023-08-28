'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../utils/cartContext'; // Import CartContext, not CartProvider
// import { handler } from '../../api/checkout/route'
import { loadStripe } from "@stripe/stripe-js";




const Cart = () => {
  const [isLoading, setLoading] = useState(false)

  const { savedCart, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveItem, totalPrice } = useContext(CartContext);

  const lineItems = savedCart.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name, // Use the name of the product from your cart
      },
      unit_amount: Math.round(item.price * 100), // Convert price to cents
    },
    quantity: item.amount,
  }));

  const handleCheckout = async () => {
    setLoading(true);


    try {
      const stripe = await loadStripe("pk_test_51NjBJaDwNGqPBW67pBypDjhiYhRQdWbglOKfIKbiBy3prnLWhAYSNTyfQ2F6NF2Js0LRt0ojGhMsBgTpiro2OBii004hhUtfoE");
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lineItems), // Pass your cart items here
      });

      const data = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: data.id });

      if (result?.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setLoading(false);
    }
  };





  return (
    <main className='flex justify-center p-5 flex-col gap-3'>
      <h1 className='md:text-4xl flex justify-center'>Items in your cart</h1>


      <div className="overflow-x-auto  p-5 align-middle">
        <table className="table">
          <thead className=''>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {savedCart.map((item, index) => (
              <tr className='items-center' key={index}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                      <Image width={240} height={240} className='w-24 h-24' src={`/Pics_for_store/${item.name}.jpg`} alt={item.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                      <div className="text-sm opacity-50">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.price}
                </td>
                <td className=' '>
                  <div className='flex justify-start gap-1 items-center'>
                <button onClick={() => handleDecreaseQuantity(item)} className="btn btn-ghost btn-xs" disabled={item.amount === 1}>-</button>
                  {item.amount}
                  <button onClick={() => handleIncreaseQuantity(item)} className="btn btn-ghost btn-xs">+</button>
                  </div>
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
          <button onClick={handleCheckout} className="btn btn-success" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Checkout'}
            </button>
            <Link href={'/products'} ><button className="btn btn-secondary">Continue Shopping</button> </Link>
          </div>
        </div>

      </div>
      {/* <div className='btn btn-primary'>Checkout</div> */}
    </main>
  );
};

export default Cart;
