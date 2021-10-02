import React from 'react';
import { Form, Formik } from 'formik';
import FormikControl from 'shared/components/customs-field/FormikControl';
import { Button } from 'shared/components/common';
import PropTypes from 'prop-types';

function Category({ options, onFilterChange }) {
  const initialValues = {
    categoryOptions: [],
  };
  const handleFilter = categoryOptions => {
    if (onFilterChange) {
      onFilterChange({ filter: categoryOptions });
    }
  };
  return (
    <div className="py-8 px-5">
      <h2 className="mb-10">product category</h2>
      <Formik initialValues={initialValues} onSubmit={handleFilter}>
        {() => (
          <>
            <Form className="relative">
              <Button className="mb-5" type="primary" htmlType="submit">
                filter
              </Button>
              <FormikControl
                control="checkbox"
                options={options}
                name="categoryOptions"
              />
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}

Category.propTypes = {
  options: PropTypes.array,
  onFilterChange: PropTypes.func,
};

export default Category;
