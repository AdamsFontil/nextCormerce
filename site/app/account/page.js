/* eslint-disable react-hooks/exhaustive-deps */
// account/page.js
'use client'
import React, { useState, useEffect } from 'react';
import SignUp from './signup/page';
import Login from './login/page';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const Account = () => {
  const [hasSavedUser, setHasSavedUser] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Function to check if there is a saved user (you can implement this logic)
  const checkForSavedUser = () => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setHasSavedUser(true);
    }
    console.log('saved user from account comp-----', savedUser);
  };

  // Call the function to check for a saved user when the component mounts
  useEffect(() => {
    // Ensure this code runs only on the client-side
    checkForSavedUser();
  }, []);

  const handleLogout = async () => {
    try {
      // Clear the authentication data from the authStore
      // await pb.authStore.clear();
      console.log('logging out----')

      // Access the auth data from the authStore
      // console.log(pb.authStore.isValid); // Check if the authentication is valid (true/false)
      // console.log(pb.authStore.token); // Access the authentication token
      // console.log(pb.authStore.model.id); // Access the user ID of the authenticated user

      // Remove the "user" item from local storage
      localStorage.removeItem('user');
      setHasSavedUser(false)
    } catch (error) {
      // Handle logout errors, if any
      console.error('Failed to log out:', error);
    }
  };


  // console.log('n---',userObject)
  // // console.log('narrow---',savedUser.record.username)
  // console.log('narrower---',userObject.record.username)
  // const name = userObject.record.username

  return (
    <>
      {/* eslint-disable react/no-unescaped-entities */}
      {hasSavedUser ? (
        <main className='p-7 h-screen flex flex-col gap-5'>
          <div>
          <h1>Ahoy!</h1>
          <p>Hello, , welcome to Santa's Collections and Beauty Website. We're to have you here</p>
          <p>This is this accounts Page if you're seeing this then you're logged in.</p>
          <p>If you aren't logged in you won't see this page and you'll have to sign up or login btw you can always
            log out and shop as a guest. Our main site is with Shopify so stick around here to see our products,
            sign up for our email lists, and follow our social medias. </p>
          </div>
          <button className='bg-red-500 p-2 hover:text-lg' onClick={handleLogout}>Logout</button>
        </main>
      ) : (
        <>
          {showLoginForm ? (
            // Render the login form when showLoginForm is true
            <Login setHasSavedUser={setHasSavedUser} setShowLoginForm={setShowLoginForm} />
          ) : (
            <SignUp setShowLoginForm={setShowLoginForm} setHasSavedUser={setHasSavedUser} />
          )}
        </>
      )}
    </>
  );
};

export default Account;
