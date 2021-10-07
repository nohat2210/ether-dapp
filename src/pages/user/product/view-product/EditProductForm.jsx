import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from 'shared/components/customs-field/FormikControl';
import useGetCategories from 'shared/hooks/useGetCategories';
import PropTypes from 'prop-types';
import { Button } from 'shared/components/common';
import useRoutes from 'shared/hooks/useRoutes';
import { useSelector } from 'react-redux';

function EditProductForm({ product, onSubmit }) {
  const { categories } = useGetCategories();
  const { history } = useRoutes();
  const isLoading = useSelector(state => state.products.loading);
  const initialValues = {
    name: product?.name ?? '',
    description: product?.description ?? '',
    category: product?.category.id ?? '',
    price: product?.price ?? '',
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <FormikControl control="input" name="name" label="name product" />
          <FormikControl
            control="select"
            defaultSelected="Select a category"
            options={categories}
            name="category"
            label="category"
          />
          <FormikControl
            control="textarea"
            name="description"
            label="descripton"
          />
          <FormikControl
            control="input"
            type="number"
            name="price"
            label="price"
          />
          <div className="flex">
            <Button
              loading={isLoading}
              className="mr-2 h-40px"
              type="primary"
              htmlType="submit"
            >
              Update
            </Button>
            <Button
              className="h-40px"
              onClick={() => history.push(`/products/${product?._id}`)}
              type="default"
            >
              back
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

EditProductForm.propTypes = {
  onSubmit: PropTypes.func,
  product: PropTypes.object,
};

export default EditProductForm;
