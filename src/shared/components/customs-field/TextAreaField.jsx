import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const TextAreaField = ({
  name,
  label,
  cols,
  rows,
  className,
  placeholder,
  disabled,
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
          as="textarea"
          className="textarea__field block"
          name={name}
          rows={rows}
          cols={cols}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
};

export default TextAreaField;
