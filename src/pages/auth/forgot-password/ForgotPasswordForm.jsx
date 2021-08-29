import { Formik, Form, Field } from 'formik';
import React from 'react';
import { Button } from 'shared/components/common';

function ForgotPasswordForm() {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <Field name="emai" type="email" placeholder="email" />
          </div>
          <div className="form-group">
            <Button loading={isSubmitting} htmlType="submit" type="primary">
              get code
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ForgotPasswordForm;
