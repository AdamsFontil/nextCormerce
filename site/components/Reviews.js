'use client'
import React, { useState, useEffect } from 'react';
import { getAllReviews } from '@/app/api/reviews';
import ReviewForm from './ReviewForm';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [productName, setProductName] = useState('');

  const fetchProductReviews = async () => {
    try {
      const result = await getAllReviews();
      const filteredReviews = result.items.filter(review => review.product === id);
      setProductName(result.items[0]?.collectionName);
      setReviews(filteredReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchProductReviews();
  }, [id]);

  const handleReply = () => {
    console.log('adding reply');
  };

  const refreshReviews = () => {
    fetchProductReviews();
  };

  return (
    <div className='pt-10'>
      <div className='flex justify-between'>
        <h2 className='text-4xl'>Reviews</h2>
        <ReviewForm id={id} name={productName} refreshReviews={refreshReviews} />
      </div>

      <div className="card w-full bg-base-100 shadow-xl">
        {reviews.map((review) => (
          <div key={review.id} className="card-body">
            <h2 className="card-title">{review.title}</h2>
            <div className="review-author">by: {review.reviewer}</div>
            <div className="review-rating">Rating: {review.rating}/5</div>
            <div className="review-content">Review: {review.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
