'use client'
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {


  return (
    <main className="p-5 flex flex-col gap-5 justify-between">
      <div className="">
        <h1 className="text-3xl font-bold mb-4">Welcome to our Bag & Purse Store</h1>
      </div>
      <div className="flex p-4  bg-white rounded">
        <div className='flex p-6 items-center'>
          <p className="text-gray-600">
            Welcome to our online store where you can find a wide selection of high-quality bags and
            purses. Our products are carefully handcrafted with love, and we take pride in delivering
            the best customer experience.

          </p>
          <p>You can put a logo next to this intro and I can make that logo the favicon of the page, and have
            be the logo of the main page
          </p>
        </div>
        <div className="max-w-l rounded">
        <img className="" src={`/pics_for_store/bag.jpg`} alt={'watch'} />
        </div>
      </div>

    </main>
  );
};

export default Home;
