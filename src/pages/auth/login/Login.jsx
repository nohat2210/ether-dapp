import React from 'react';
import useRoutes from 'shared/hooks/useRoutes';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import LoginForm from './LoginForm';
import AuthLayout from 'layout/auth/AuthLayout';
import { loginAuth } from '../authSlice';

function Login() {
  const { history } = useRoutes();
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }) => {
    dispatch(loginAuth({ email, password }))
      .then(unwrapResult)
      .then(() => {
        history.push('/');
        // shownSuccess('login success');
      })
      .catch(error => console.log(error));
  };
  return (
    <AuthLayout>
      <h2 className="mb-5 text-center">login</h2>
      <LoginForm onSubmit={handleSubmit} />
    </AuthLayout>
  );
}

export default Login;
