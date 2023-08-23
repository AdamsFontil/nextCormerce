import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      avatar: "test",
      title: 'Best Review Ever',
      author: 'John Doe',
      rating: 4,
      content: 'These shoes are amazing! They are so comfortable and stylish.',
    },
    {
      id: 2,
      avatar: "test",
      title: 'Best Shoes Ever',
      author: 'John Doe',
      rating: 4,
      content: 'These shoes are amazing! They are so comfortable and stylish.',
    },
    {
      id: 3,
      avatar: "test",
      title: 'Best Bag Ever',
      author: 'John Doe',
      rating: 4,
      content: 'These shoes are amazing! They are so comfortable and stylish.',
    },
    {
      id: 4,
      avatar: "test",
      title: 'Greatest Watch',
      author: 'John Doe',
      rating: 4,
      content: 'These shoes are amazing! They are so comfortable and stylish.',
    },
    {
      id: 5,
      avatar: "test",
      title: 'Cool shirt',
      author: 'John Doe',
      rating: 4,
      content: 'These shoes are amazing! They are so comfortable and stylish.',
    },

  ];

  return (
    <div className=' pt-10'>
      <div className='flex justify-between'>
      <h2 className='text-4xl'>Reviews</h2>
      <button className="btn btn-primary">Add a Review</button>
      </div>


      <div className="card w-full bg-base-100 shadow-xl">
        {reviews.map(review => (
          <div key={review.id} className="card-body">
            <h2 className="card-title">{review.title}</h2>
            <div className="review-author">by: {review.author}</div>
            <div className="review-rating">Rating: {review.rating}/5</div>
            <div className="review-content">Review: {review.content}</div>
            <div className="card-actions justify-end">
      <button className="btn btn-primary">Reply</button>
    </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Reviews;
