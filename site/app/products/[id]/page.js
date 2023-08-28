'use client'
import { useQuery } from 'react-query';
import { useParams } from 'next/navigation';
import { getOneProduct } from '../../api/products';
import Image from 'next/image';
import Link from 'next/link';
import Carrousel from '../../../components/Carrousel'
import { useContext } from 'react';
import { CartContext } from '@/utils/cartContext';
import Reviews from '../../../components/Reviews'

const ProductDetails = () => {
  const { id } = useParams();



  const { data: details, isLoading, isError } = useQuery(['product', id], () =>
    getOneProduct(id)
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product details</div>;
  }

  if (!details) {
    return null; // or any other fallback
  }

  console.log('productDeets----', details);
  console.log('description----', details.description);
  const { savedCart, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveItem, totalPrice } = useContext(CartContext);
  const cartItem = savedCart.find((item) => item.name === details.name);
  const quantityInCart = cartItem ? cartItem.amount : 0;


  return (
<div className='p-5'>
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div>
      <figure className="card-image">
        <Image width={720} height={720} className='h-96 w-96 object-cover' src={`/Pics_for_store/${details.name}.jpg`} alt={details.name} />
      </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{details.title}</h2>
        <p>Description: {details.description}</p>
        <div className="card-actions items-center gap-4">
        <Carrousel productName={details.name} />
          <div className='flex md:flex-col gap-4 '>
            <div className='flex md:flex-col gap-4'>

              {quantityInCart > 0 ? (
                <div className=''>
                  <button onClick={() => handleDecreaseQuantity(details)} className="btn mr-2 btn-primary">-</button>
                  {quantityInCart}
                  <button onClick={() => handleIncreaseQuantity(details)} className="btn ml-2 btn-primary">+</button>
                </div>

              ) : (
                <button onClick={() => handleIncreaseQuantity(details)} className="btn btn-primary">Add to Cart</button>
              )}
              <Link href='/cart'><button className="btn btn-secondary px-6">Go to cart</button> </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Reviews />
  </div>


  );

};

export default ProductDetails;
