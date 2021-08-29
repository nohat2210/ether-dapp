import React from 'react';
import SVGIcon from './SVGIcon';
import PropTypes from 'prop-types';

const typesToast = {
  success: {
    icon: 'success-icon',
    className: 'message-success',
  },
  error: {
    icon: 'error-icon',
    className: 'message-error',
  },
  info: {
    icon: 'info-icon',
    className: 'message-info',
  },
  warning: {
    icon: 'warning-icon',
    className: 'message-warning',
  },
};

const Toast = ({ type, message, trigger }) => {
  return (
    <div
      id={`toast ${trigger ? 'show' : 'hide'}`}
      className={`toast ${typesToast[type].className}`}
    >
      <span className="toast__icon">
        <SVGIcon icon={typesToast[type].icon} />
      </span>
      <div className="toast__body">
        <p className="toast__msg">{message}</p>
      </div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.node,
  type: PropTypes.string,
  trigger: PropTypes.bool,
};

export default Toast;
