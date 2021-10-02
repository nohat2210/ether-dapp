import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const SelectField = ({
  name,
  label,
  className,
  defaultSelected,
  disabled,
  options,
}) => {
  return (
    <div className={`form__field ${className || ''}`}>
      {label && (
        <label className="field__label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="field">
        <Field
          id={name}
          className="select__field block"
          as="select"
          name={name}
          disabled={disabled}
        >
          <option value="">{defaultSelected}</option>
          {options.map(item => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </Field>
      </div>
    </div>
  );
};

SelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  defaultSelected: PropTypes.string,
  options: PropTypes.array,
};

export default SelectField;
