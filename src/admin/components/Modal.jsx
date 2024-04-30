import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children, className }) => {

  return (
    <div className={`modal ${isOpen ? 'open' : ''} ${className ? className : ''}`} onClick={onClose}>
      <div className="modal-overlay">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};


export default Modal;