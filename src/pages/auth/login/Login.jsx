import React from 'react';
import { useToast } from 'shared/hooks/useToast';
import useRoutes from 'shared/hooks/useRoutes';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import LoginForm from './LoginForm';
import AuthLayout from 'layout/auth/AuthLayout';
import { loginAuth } from '../authSlice';

function Login() {
  const { history } = useRoutes();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const handleSubmit = ({ email, password }) => {
    dispatch(loginAuth({ email, password }))
      .then(unwrapResult)
      .then(() => {
        history.push('/');
        toast.success('Login Success');
      })
      .catch(err => toast.error(err));
  };
  return (
    <AuthLayout>
      <h2 className="mb-5 text-center">login</h2>
      <LoginForm onSubmit={handleSubmit} />
    </AuthLayout>
  );
}

export default Login;
