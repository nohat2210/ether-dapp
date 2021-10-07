import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from 'shared/components/customs-field/FormikControl';
import { Button } from 'shared/components/common';
import useGetCategories from 'shared/hooks/useGetCategories';
import PropTypes from 'prop-types';

function PostProductForm({ onSubmit }) {
  const initialValues = { name: '', category: '', description: '', price: '' };
  const { categories } = useGetCategories();
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="products__form">
        <FormikControl
          control="input"
          type="text"
          name="name"
          label="product name"
        />
        <FormikControl
          options={categories}
          control="select"
          name="category"
          label="category"
          defaultSelected="Select a category"
        />
        <FormikControl
          control="textarea"
          name="description"
          label="description"
        />
        <FormikControl
          control="input"
          type="number"
          name="price"
          label="price"
        />
        <div className="flex float-right">
          <Button className="mr-2 h-40px" htmlType="reset" type="default">
            clear
          </Button>
          <Button className="h-40px" htmlType="submit" type="primary">
            post
          </Button>
        </div>
      </Form>
    </Formik>
  );
}

PostProductForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default PostProductForm;
