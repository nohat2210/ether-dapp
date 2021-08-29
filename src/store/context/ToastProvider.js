import React, { useState } from 'react';
import Toast from 'shared/components/Toast';
import { ToastContext } from 'shared/hooks/useToast';

const ToastProvider = ({ children }) => {
  const [state, setState] = useState({ isOpen: false, message: '', type: '' });
  const show = ({ message, type }) => {
    setState({ isOpen: true, message, type });
  };
  const hide = () => setState({ isOpen: false });
  const error = message => {
    show({ type: 'error', message });
  };
  const warn = message => {
    show({ type: 'warning', message });
  };
  const info = message => {
    show({ type: 'info', message });
  };
  const success = message => {
    show({ type: 'success', message });
  };
  const { isOpen, message, type } = state;

  return (
    <ToastContext.Provider value={(error, warn, info, success, hide)}>
      {children}
      {message && <Toast trigger={isOpen} type={type} message={message} />}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
