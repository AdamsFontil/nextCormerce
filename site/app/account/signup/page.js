'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://little-violet-3254.fly.dev');

const SignUp = ({ setShowLoginForm, setHasSavedUser }) => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = {
        username: values.username,
        email: values.email,
        password: values.password,
        passwordConfirm: values.passwordConfirm,
      };

      const createUser = await pb.collection('users').create(data);
      console.log('Created user:', createUser);
      const authData = await pb.collection('users').authWithPassword(values.username, values.password);

      // Save the authenticated user data to local storage
      localStorage.setItem('user', JSON.stringify(authData));
      setHasSavedUser(true);

      // Reset the form after successful submission
      setSubmitting(false);
    } catch (error) {
      console.error('Failed to create user:', error);
      setSubmitting(false);
    }
  };

  const handleLogin = () => {
    console.log('login-----');
    setShowLoginForm(true);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <div className='flex w-full p-5 justify-center'>
          <div className="card w-full shadow-2xl bg-base-100">

            <div className="card-body">
              <Form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <Field type="text" name="username" placeholder="Username" className="input input-bordered" />
                  <ErrorMessage name="username" component="div" className="text-error" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Field type="email" name="email" placeholder="Email" className="input input-bordered" />
                  <ErrorMessage name="email" component="div" className="text-error" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Field type="password" name="password" placeholder="Password" className="input input-bordered" />
                  <ErrorMessage name="password" component="div" className="text-error" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Repeat Password</span>
                  </label>
                  <Field type="password" name="passwordConfirm" placeholder="Repeat Password" className="input input-bordered" />
                  <ErrorMessage name="passwordConfirm" component="div" className="text-error" />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    Sign Up
                  </button>
                </div>
                <div className="form-control mt-4">
                  <button type="button" className="btn btn-secondary" onClick={handleLogin}>
                    Sign In
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
