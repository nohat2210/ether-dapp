import React from 'react';
import FormikControl from 'shared/components/customs-field/FormikControl';
import { Form, Formik } from 'formik';
import { Button } from 'shared/components/common';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function EditUserForm({ profile, onSubmit }) {
  const isLoading = useSelector(state => state.user.loading);
  return (
    <Formik
      initialValues={{
        firstName: profile.firstName ?? '',
        lastName: profile.lastName ?? '',
        email: profile.email ?? '',
        birthday: profile.birthday ?? '',
      }}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <FormikControl control="input" label="first name" name="firstName" />
          <FormikControl control="input" label="last name" name="lastName" />
          <FormikControl
            control="input"
            disabled
            type="email"
            label="email"
            name="email"
          />
          <FormikControl
            control="input"
            type="date"
            label="birthday"
            name="birthday"
          />
          <Button
            loading={isLoading}
            className="h-40px"
            htmlType="submit"
            type="primary"
          >
            save
          </Button>
        </Form>
      )}
    </Formik>
  );
}

EditUserForm.propTypes = {
  profile: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default EditUserForm;
