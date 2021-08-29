import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from 'shared/components/common';
import InputField from 'shared/components/InputField';

function RegisterForm({ onSubmit }) {
  const isLoading = useSelector(state => state.auth.loading);
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div className="flex center-between">
            <InputField
              className="field_name_input"
              type="text"
              name="firstName"
              placeholder="First name"
              label="first name"
            />
            <InputField
              className="field_name_input"
              type="text"
              name="lastName"
              placeholder="Last name"
              label="last name"
            />
          </div>
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            label="email"
          />
          <InputField
            renderIcon
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
          />
          <InputField
            renderIcon
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            label="Confirm password"
          />
          <div className="form-group">
            <Button
              className="btn__field w-full my-2"
              loading={isLoading}
              htmlType="submit"
              type="primary"
            >
              register
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
