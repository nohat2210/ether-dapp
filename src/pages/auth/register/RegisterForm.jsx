import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from 'shared/components/common';
import FormikControl from 'shared/components/customs-field/FormikControl';

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
      <Form>
        <div className="flex center-between">
          <FormikControl
            control="input"
            className="field_name_input"
            type="text"
            name="firstName"
            placeholder="First name"
            label="first name"
          />
          <FormikControl
            control="input"
            className="field_name_input"
            type="text"
            name="lastName"
            placeholder="Last name"
            label="last name"
          />
        </div>
        <FormikControl
          control="input"
          type="email"
          name="email"
          placeholder="Email"
          label="email"
        />
        <FormikControl
          control="input"
          renderIcon
          type="password"
          name="password"
          placeholder="Password"
          label="Password"
        />
        <FormikControl
          control="input"
          renderIcon
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          label="Confirm password"
        />
        <Button
          className="btn__field w-full my-2"
          loading={isLoading}
          htmlType="submit"
          type="primary"
        >
          register
        </Button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
