import { Formik, Field, Form } from 'formik';
import React from 'react';
import { Button } from 'shared/components/common';

function ResetPasswordForm() {
  return (
    <Formik
      initialValues={{
        newPassword: '',
        confirmNewPassword: '',
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="password" name="newPassword" />
          </div>
          <div>
            <Field type="password" name="confirmNewPassword" />
          </div>
          <div>
            <Button loading={isSubmitting} type="primary" htmlType="submit">
              reset password
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ResetPasswordForm;
