import React, { useEffect, useState } from 'react';
import Toast from 'shared/components/Toast';
import { ToastContext } from 'shared/hooks/useToast';

const ToastProvider = ({ children }) => {
  const [state, setState] = useState({
    visible: false,
    message: '',
    type: '',
    duration: 0,
  });
  const show = ({ message, type, duration = 3000 }) => {
    setState({ visible: true, message, type, duration });
  };
  const toast = {
    error: (error, duration) => {
      const message = (() => {
        if (typeof error === 'string') return error;
        return (
          error?.message ?? 'Server Internall Error. Please try later !!!!'
        );
      })();
      show({ type: 'error', message, duration });
    },
    info: (message, duration) => {
      show({ type: 'info', message, duration });
    },
    warn: (message, duration) => {
      show({ type: 'warning', message, duration });
    },
    success: (message, duration) => {
      show({ type: 'success', message, duration });
    },
  };

  const { visible, message, type, duration } = state;
  useEffect(() => {
    if (visible === true) {
      setTimeout(() => setState({ visible: false }), duration + 1000);
    }
  }, [visible, duration]);
  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {message && (
        <Toast
          trigger={visible}
          type={type}
          message={message}
          duration={duration}
        />
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
