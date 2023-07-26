'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PocketBase from 'pocketbase';
// import { useRouter } from 'next/router';

const pb = new PocketBase('http://127.0.0.1:8090');

const SignUp = ({setShowLoginForm, setHasSavedUser}) => {
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

  // const router = useRouter();

  const handleLogin = () => {
    console.log('login-----')
    setShowLoginForm(true);
    // router.push('/login'); // Use router.push to navigate to the '/login' page
  };

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
      setHasSavedUser(true)

      // Reset the form after successful submission
      setSubmitting(false);
      // router.push('/account'); // Example: Redirect to the dashboard after sign up
    } catch (error) {
      console.error('Failed to create user:', error);
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className='mt-10 m-10 text-lg rounded-md p-5 flex flex-col gap-4 bg-red-400'>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" />
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <Field type="password" name="passwordConfirm" placeholder="Repeat Password" />
          <ErrorMessage name="passwordConfirm" component="div" />
          <button className='p-2 border-2' type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
          <button className='p-2 border-2 bg-gray-500' type="button" onClick={handleLogin}>
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
