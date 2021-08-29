import React from 'react';
import { Button } from 'shared/components/common';
import VerifyPasswordForm from './VerifyPasswordForm';
import AuthLayout from 'layout/auth/AuthLayout';

function VerifyPassword() {
  return (
    <AuthLayout>
      <h2>reset password</h2>
      <p>
        a code has been sent to your registered email, please open your inbox to
        check.
      </p>
      <VerifyPasswordForm />
      <p>
        haven’t received the code?
        <Button type="text">send it again</Button>
      </p>
    </AuthLayout>
  );
}

export default VerifyPassword;
