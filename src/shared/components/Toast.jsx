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

const Toast = ({ type, message, trigger, duration = 3000 }) => {
  const delay = (duration / 1000).toFixed(2);
  if (trigger) {
    return (
      <div
        id={`toast`}
        className={`toast ${typesToast[type]?.className}`}
        style={{
          animation: `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`,
        }}
      >
        <span className="toast__icon">
          <SVGIcon icon={typesToast[type]?.icon} />
        </span>
        <div className="toast__body">
          <p className="toast__msg">{message}</p>
        </div>
      </div>
    );
  }
};

Toast.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  trigger: PropTypes.bool,
  duration: PropTypes.number,
  remove: PropTypes.func,
};

export default Toast;
