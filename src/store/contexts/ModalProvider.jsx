import React, { useState } from 'react';
import Modal from 'shared/components/Modal';
import { ModalContext } from 'shared/hooks/useModal';

const ModalProvider = ({ children }) => {
  const [state, setState] = useState({
    visible: false,
    title: '',
    content: '',
    okText: 'Ok',
    cancelText: 'Cancel',
    onOk() {},
    onCancel() {},
  });
  const hide = () => setState({ visible: false });
  const shown = ({ title, content, okText, cancelText, onOk, onCancel }) => {
    setState({
      visible: true,
      title,
      content,
      okText,
      cancelText,
      onOk,
      onCancel,
    });
  };
  const modal = {
    confirm: ({ title, content, okText, cancelText, onOk, onCancel }) => {
      shown({
        title,
        content,
        okText,
        cancelText,
        onOk,
        onCancel,
      });
    },
  };
  const { visible, title, content, okText, cancelText, onOk, onCancel } = state;
  return (
    <ModalContext.Provider value={{ modal, hide }}>
      {children}
      {title && content && (
        <Modal
          onTrigger={visible}
          onClose={hide}
          config={{
            title,
            content,
            okText,
            cancelText,
            onOk,
            onCancel,
          }}
        />
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
