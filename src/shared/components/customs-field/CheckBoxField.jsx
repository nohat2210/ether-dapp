import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const CheckBoxField = ({ className, disabled, label, name, options }) => {
  return (
    <div className={`form__field ${className || ''}`}>
      {label && (
        <label className="field__label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="flex flex-wrap">
        <Field name={name}>
          {({ field }) => {
            return options.map(option => {
              return (
                <div className="flex center-2 mr-3 my-2" key={option?.id}>
                  <input
                    {...field}
                    type="checkbox"
                    className="checkbox__field"
                    id={option?.id}
                    value={option?.id}
                    disabled={disabled}
                    checked={field.value?.includes(option?.id)}
                  />
                  <label htmlFor={option?.id}>{option?.name}</label>
                </div>
              );
            });
          }}
        </Field>
      </div>
    </div>
  );
};

CheckBoxField.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CheckBoxField;
