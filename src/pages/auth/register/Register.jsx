import AuthLayout from 'layout/auth/AuthLayout';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router';
import { useToast } from 'shared/hooks/useToast';
import React from 'react';
import RegisterForm from './RegisterForm';
import { registerAuth } from '../authSlice';

function Register() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const history = useHistory();
  const handleSubmit = ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) => {
    if (password === confirmPassword) {
      dispatch(registerAuth({ firstName, lastName, email, password }))
        .then(unwrapResult)
        .then(() => {
          history.push('/login');
          toast.success('Register success');
        })
        .catch(err => toast.error(err));
    } else {
      toast.error('Your password and confirm password not match!');
    }
  };
  return (
    <AuthLayout>
      <h2 className="mb-5 text-center">become to member</h2>
      <RegisterForm onSubmit={handleSubmit} />
    </AuthLayout>
  );
}

export default Register;
