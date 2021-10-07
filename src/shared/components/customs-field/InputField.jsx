import React, { useState } from 'react';
import { Field } from 'formik';
import SVGIcon from '../SVGIcon';
import PropTypes from 'prop-types';

const InputField = ({
  renderIcon,
  icon,
  name,
  label,
  type,
  className,
  disabled,
  placeholder,
}) => {
  const [visible, setVisible] = useState(false);
  const handleChangeType = event => {
    event.stopPropagation();
    setVisible(!visible);
  };

  if (type === 'password') {
    return (
      <div className={`form__field ${className || ''}`}>
        {label && (
          <label className="field__label" htmlFor={name}>
            {label}
          </label>
        )}
        <div className="field__input">
          <Field
            autoComplete="off"
            className="flex-1"
            id={name}
            type={visible === true ? 'text' : 'password'}
            disabled={disabled}
            name={name}
            placeholder={placeholder}
          />
          {renderIcon && (
            <button
              aria-hidden="true"
              onClick={handleChangeType}
              type="button"
              aria-label={visible ? 'eye-icon' : 'eye-invisible'}
              className="input__icon"
            >
              <SVGIcon icon={visible ? 'eye-icon' : 'eye-invisible'} />
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`form__field ${className || ''}`}>
        {label && (
          <label className="field__label" htmlFor={name}>
            {label}
          </label>
        )}
        <div className="field field__input">
          <Field
            autoComplete="off"
            className="flex-1"
            id={name}
            s
            type={type}
            disabled={disabled}
            name={name}
            placeholder={placeholder}
          />
          {icon && (
            <span aria-label={icon} aria-hidden="true" className="input__icon">
              <SVGIcon icon={icon} />
            </span>
          )}
        </div>
      </div>
    );
  }
};

InputField.defaultProps = {
  renderIcon: false,
  className: '',
  type: 'text',
  label: '',
  disabled: false,
};

InputField.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  renderIcon: PropTypes.bool,
};

export default InputField;
