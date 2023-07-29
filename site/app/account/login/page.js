'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://little-violet-3254.fly.dev');

const Login = ({ setHasSavedUser, setShowLoginForm }) => {
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      // Authenticate the user with the provided username and password
      const authData = await pb.collection('users').authWithPassword(values.username, values.password);

      // Access the auth data from the authStore
      console.log(pb.authStore.isValid); // Check if the authentication is valid (true/false)
      console.log(pb.authStore.token); // Access the authentication token
      console.log(pb.authStore.model.id); // Access the user ID of the authenticated user

      // For demonstration purposes, let's assume login is successful and the user data is saved in local storage
      localStorage.setItem('user', JSON.stringify(authData));
      setHasSavedUser(true);
      savedUser = authData;
      console.log('saved user from login---', savedUser);

      // After successful login, navigate to the '/account' page or handle any other logic
      // router.push('/account');
    } catch (error) {
      // Handle login errors, e.g., display an error message
      console.error('Failed to log in:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignUp = () => {
    console.log('go back to sign up');
    setShowLoginForm(false);
  };

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <>
      <div className='flex p-5 justify-center'>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin}>
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <Field type="text" name="username" placeholder="Enter your username" className="input input-bordered" />
                    <ErrorMessage name="username" component="div" className="text-error" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <Field type="password" name="password" placeholder="Enter your password" className="input input-bordered" />
                    <ErrorMessage name="password" component="div" className="text-error" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6 flex flex-col gap-2">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Login</button>
                    <button type="button" className="btn btn-secondary" onClick={handleSignUp}>Sign Up</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
