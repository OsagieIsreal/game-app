import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'; // For validation
import { useNavigate } from "react-router-dom";
// import Game from './Game';
import './LoginPage.css';
import { toast } from 'react-toastify';
import { axiosInstance } from '../config/axios.config';
interface ILoginDetails {
  username: string
  password: string

}

interface ISignupDetails {
  username: string
  password: string
  email: string

}

const LoginPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false); // Tracks whether Sign Up form is active
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Tracks login or signup status
  const navigate = useNavigate();
  const toggleForm = () => setIsSignUp(!isSignUp);

  const initialValuesLogin = { username: '', password: '' };
  const initialValuesSignUp = { username: '', email: '', password: '' };

  const validationSchemaLogin = yup.object({
    username: yup.string().required('Username is required').
    test('username', 'Custom username error', function(username: string) {
        // Your custom function logic here
        if (!username) {
          // You can do any custom validation here
          toast.error('Please enter your username')
          // return false;
        }
        return true;
      }),
    password: yup.string().required('Password is required'),
  });

  const validationSchemaSignUp = yup.object({
    username: yup.string()
      .required('Username is required'),
    
    email: yup.string()
      .email('Invalid email address')
      .required('Email is required')
     ,
    password: yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  const handleLoginSubmit = (payload: ILoginDetails ) => {
    console.log('Form values:', payload);
    // setSubmitting(true)
axiosInstance.post("/users/login", payload)
                  .then((response)=>{
                    toast.success(`Login sucessfull, Welcome ${payload.username}`)
                    console.log(response, 'sucess')
                    sessionStorage.setItem('user',JSON.stringify(response.data))
                navigate("/game");
                  })
                  
                  .catch((error)=>{
                    console.log(error)
                     toast.error(error.message)
                  })
    
    //  setSubmitting(false)
  };

   const handleSignUpSubmit = (payload: ISignupDetails) => {
    axiosInstance.post("/users", payload)
                  .then((response)=>{
                    toast.success('Signup sucessfull')
                    console.log(response, 'sucess')
                    sessionStorage.setItem('user',JSON.stringify(response.data))
                    navigate("/game");
                  })
                  
                  .catch((error)=>{
                    console.log(error)
                     toast.error(error.message)
                  })
  
  };


  return (
    <div className="login-page">
      <div className={`wrapper ${isSignUp ? 'active' : ''}`}>
        {/* Sign In Form */}
        <div className="form-wrapper sign-in">
          <Formik
            initialValues={initialValuesLogin}
            validationSchema={validationSchemaLogin}
            onSubmit={handleLoginSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <h2>Login</h2>
                <div className="input-group">
                  <Field type="text" name="username" placeholder="Username" />
                  <ErrorMessage name="username" component="div" className="error" />
                </div>
                <div className="input-group">
                  <Field type="password" name="password" placeholder="Password" />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                <div className="remember">
                  <label>
                    <input type="checkbox" className="rem" /> Remember me
                  </label>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
                <div className="signUp-link">
                  <p>
                    Don't have an account?{' '}
                    <a href="#" className="signUpBtn-link" onClick={toggleForm}>
                      Sign Up
                    </a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Sign Up Form */}
        <div className="form-wrapper sign-up">
          <Formik
            initialValues={initialValuesSignUp}
            validationSchema={validationSchemaSignUp}
            onSubmit={handleSignUpSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <h2>Sign Up</h2>
                <div className="input-group">
                  <Field type="text" name="username" placeholder="Username" />
                  <ErrorMessage name="username" component="div" className="error" />
                </div>
                <div className="input-group">
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div className="input-group">
                  <Field type="password" name="password" placeholder="Password" />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                <div className="remember">
                  <label>
                    <Field type="checkbox" name="terms" />
                    I agree to the terms & conditions
                  </label>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Sign Up
                </button>
                <div className="signIn-link">
                  <p>
                    Already have an account?{' '}
                    <a href="#" className="signInBtn-link" onClick={toggleForm}>
                      Sign In
                    </a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
