import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from 'shared/components/common';
import { loginSchema } from 'core/validate';
import InputField from 'shared/components/InputField';

function LoginForm({ onSubmit }) {
  const isLoading = useSelector(state => state.auth.loading);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <InputField
            name="email"
            type="email"
            label="email"
            placeholder="Email"
          />
          <InputField
            name="password"
            type="password"
            label="password"
            placeholder="Password"
            renderIcon
          />
          <div>
            <Link to="/forgot-password" className="field_link">
              Forgot password?
            </Link>
            <Button
              className="btn__field w-full my-2"
              loading={isLoading}
              htmlType="submit"
              type="primary"
            >
              log in
            </Button>
          </div>
          <div className="text-center">
            <span className="mr-2" style={{ fontSize: '14px' }}>
              Not a member?
            </span>
            <Link to="/register" className="field_link font-semibold">
              Register
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
