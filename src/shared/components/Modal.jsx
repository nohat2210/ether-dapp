import React from 'react';
import { Button } from './common';
import PropTypes from 'prop-types';

const Modal = ({ onTrigger, config, onClose }) => {
  const { title, content, onOk, onCancel, okText, cancelText } = config;
  return (
    <div
      onClick={onClose}
      className={`modal__dimmer ${onTrigger ? 'visible' : 'hidde'}`}
    >
      <div onClick={e => e.stopPropagation()} className={`modal__body`}>
        <h3 className="modal__title">{title}</h3>
        <div className="modal__content">
          <p>{content}</p>
        </div>
        <div className="modal__action">
          <Button onClick={onCancel} type="default" className="modal__btn mr-2">
            {cancelText || 'Cancel'}
          </Button>
          <Button onClick={onOk} type="primary" className="modal__btn">
            {okText || 'Ok'}
          </Button>
        </div>
      </div>
    </div>
  );
};

Modal.propsTypes = {
  onTrigger: PropTypes.bool,
  onClose: PropTypes.func,
  config: PropTypes.objectOf({
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    onOK: PropTypes.func,
    onCancel: PropTypes.func,
    okText: PropTypes.node,
    cancelText: PropTypes.node,
  }),
};

export default Modal;
