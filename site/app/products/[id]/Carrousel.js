import React from 'react';
import Image from 'next/image';

const Carousel = ({ productName }) => {
  const imageFilenames = [];

  // Generate and populate image filenames
  for (let i = 2; i <= 5; i++) {
    const filename = `${productName}${i}.jpg`;
    imageFilenames.push(filename);
  }

  return (
    <div className="carousel carousel-center max-w-lg p-4 space-x-4 bg-secondary rounded-box">
      {imageFilenames.map((filename, index) => (
        <div className="carousel-item" key={index}>
          <div className="w-56 h-56">
            <Image width={720} height={720} className='w-56 h-56 object-cover' src={`/Pics_for_store/${filename}`} alt={filename} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
