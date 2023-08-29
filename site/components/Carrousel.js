'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const Carousel = ({ productName }) => {
  const imageFilenames = [];

  // Generate and populate image filenames
  for (let i = 2; i <= 5; i++) {
    const filename = `${productName.toLowerCase()}${i}.jpg`;
    imageFilenames.push(filename);
  }

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleExpand = (index) => {
    setSelectedImageIndex(index);
    window.my_modal_2.showModal(); // Open the modal
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    window.my_modal_2.close(); // Close the modal
  };

  return (
    <div className="carousel carousel-center max-w-lg p-4 space-x-4 rounded-box">
      {imageFilenames.map((filename, index) => (
        <div className="carousel-item" key={index}>
          <div onClick={() => handleExpand(index)} className="w-56 h-56 cursor-pointer">
            <Image
              width={720}
              height={720}
              className="w-56 h-56 object-cover"
              src={`/Pics_for_store/${filename}`}
              alt={filename}
            />
          </div>
        </div>
      ))}

      {/* ImageModal */}
      <dialog id="my_modal_2" className="modal w-full h-full  " onClick={handleCloseModal}>
        <form method="dialog" className="modal-box w-4/5 md:h-5/6 m-12">
          {selectedImageIndex !== null && (
            <Image
              width={720}
              height={720}
              className="w-full h-full object-cover"
              src={`/Pics_for_store/${imageFilenames[selectedImageIndex]}`}
              alt={imageFilenames[selectedImageIndex]}
            />
          )}
        </form>
        {/* <form method="dialog" className="modal-backdrop">
          <button className="btn" onClick={handleCloseModal}>Close</button>
        </form> */}
      </dialog>
    </div>
  );
};

export default Carousel;
