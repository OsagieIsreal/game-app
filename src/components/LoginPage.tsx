import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For validation
import Game from './Game';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false); // Tracks whether Sign Up form is active
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Tracks login or signup status

  const toggleForm = () => setIsSignUp(!isSignUp);

  const initialValuesLogin = { username: '', password: '' };
  const initialValuesSignUp = { username: '', email: '', password: '' };

  const validationSchemaLogin = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const validationSchemaSignUp = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    setIsLoggedIn(true); // Simulate successful login or signup
  };

  if (isLoggedIn) {
    return <Game />;
  }

  return (
    <div className="login-page">
      <div className={`wrapper ${isSignUp ? 'active' : ''}`}>
        {/* Sign In Form */}
        <div className="form-wrapper sign-in">
          <Formik
            initialValues={initialValuesLogin}
            validationSchema={validationSchemaLogin}
            onSubmit={handleSubmit}
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
            onSubmit={handleSubmit}
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
