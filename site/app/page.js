/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const Home = () => {


  return (
  <main>
    <div className="card lg:card-side bg-base-100 p-5 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Welcome to Santa's Collections and Beauty</h2>
    <div className='flex gap-12 flex-col'>
      <p>Welcome to our online store where you can find a wide selection of high-quality bags and
            purses. Our products are carefully handcrafted with love, and we take pride in delivering
              the best customer experience.
      </p>
      <p>You can put a logo next to this intro and I can make that logo the favicon of the page, and have
              be the logo of the main page </p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Shop Now</button>
    </div>

  </div>
  <figure><img width={720} height={720}  src="/Pics_for_store/Bag.jpg" alt="Logo for the site"/></figure>
</div>
</main>
  );
};

export default Home;
