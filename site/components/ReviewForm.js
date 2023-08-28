'use client'
import React, { useState } from 'react';
import { addReview } from '@/app/api/reviews';

const ReviewForm = ({ id, reviews, name, refreshReviews }) => {
  const [rating, setRating] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  console.log('reviews from form comp---', reviews)
  console.log('testing name of item from form',name)

  const closeModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.close();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here, you can handle submitting the review to your backend or update state as needed
    const newReview = {
      title,
      reviewer: reviewerName,
      rating,
      content,
      product: id
    };

    console.log('New review:', newReview);
    await addReview(newReview);
    refreshReviews(); // Call the function to refresh the reviews in the parent component

    setRating('');
    setTitle('');
    setContent('');
    setReviewerName('');
    closeModal();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => window.my_modal_3.showModal()}>
        Add a Review
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box p-6 bg-white rounded-md shadow-md w-96" onSubmit={handleSubmit}>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
            ✕
          </button>
          <h3 className="font-bold text-lg mb-4">Review the {name}</h3>

<div className="mb-3">
  <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
    Rating:
  </label>
  <input
    type="number"
    min="1"
    max="5"
    value={rating}
    onChange={(e) => setRating(parseInt(e.target.value))}
    id="rating"
    className="mt-1 p-1 border rounded-md w-full"
    required
  />
</div>
<div className="mb-3">
  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
    Title:
  </label>
  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    id="title"
    className="mt-1 p-1 border rounded-md w-full"
    required
  />
</div>
<div className="mb-3">
  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
    Content:
  </label>
  <textarea
    value={content}
    onChange={(e) => setContent(e.target.value)}
    id="content"
    className="mt-1 p-1 border rounded-md w-full"
    required
  />
</div>
<div className="mb-3">
  <label htmlFor="reviewerName" className="block text-sm font-medium text-gray-700">
    Name:
  </label>
  <input
    type="text"
    value={reviewerName}
    onChange={(e) => setReviewerName(e.target.value)}
    id="reviewerName"
    className="mt-1 p-1 border rounded-md w-full"
    required
  />
</div>
          <button type="submit" className="btn btn-primary">
            Submit Review
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default ReviewForm;
