'use client'
import PocketBase from 'pocketbase';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const pb = new PocketBase('http://127.0.0.1:8090');

const Login = ( {setHasSavedUser, setShowLoginForm} ) => {
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
       setHasSavedUser(true)
       savedUser = authData
       console.log('saved user from login---', savedUser)

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
    console.log('go back to sign up')
    setShowLoginForm(false)
  }

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    < >
    <div >

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin}>
        {({ isSubmitting }) => (
          <Form className='mt-10 m-10 text-2xl rounded-md p-5 flex text-center flex-col gap-4 bg-red-400 items-center'>
            <div className='flex-col flex'>
            <h1>Login </h1>
              <label htmlFor="username">Username:</label>
              <Field type="text" name="username" placeholder="Enter your username" />
              <ErrorMessage name="username" component="div" />
            </div>

            <div className='flex-col flex'>
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" placeholder="Enter your password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button className='p-2 border-2' type="submit" disabled={isSubmitting}>Login</button>
            <button className='p-2 border-2 bg-white' type="button" onClick={handleSignUp}>Sign Up</button>
          </Form>
        )}
      </Formik>
      </div>
    </>
  );
};

export default Login;
