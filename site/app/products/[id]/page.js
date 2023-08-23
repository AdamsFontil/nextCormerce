'use client'
import { useQuery } from 'react-query';
import { useParams } from 'next/navigation';
import { getOneProduct } from '@/api/products';
import Image from 'next/image';
import Link from 'next/link';
import Carrousel from './Carrousel'

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
      <button className="btn btn-primary">Add to Cart</button>
      <Link href='/cart'><button className="btn btn-secondary px-6">Go to cart</button> </Link>
      </div>
      </div>
    </div>
  </div></div>


  );

};

export default ProductDetails;
