import AuthLayout from 'layout/auth/AuthLayout';
import React from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';

function ForgotPassword() {
  return (
    <AuthLayout>
      <h2>Forgot Password</h2>
      <p>Please enter your email address to get code login.</p>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}

export default ForgotPassword;
