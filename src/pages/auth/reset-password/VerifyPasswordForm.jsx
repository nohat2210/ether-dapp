import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from 'shared/components/common';

function VerifyPasswordForm() {
  return (
    <Formik
      initialValues={{
        verifyCode: '',
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="verify-code">verify code</label>
            <Field type="text" name="verifyCode" />
          </div>
          <div className="form-group">
            <Button loading={isSubmitting} htmlType="submit" type="primary">
              continue
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default VerifyPasswordForm;
