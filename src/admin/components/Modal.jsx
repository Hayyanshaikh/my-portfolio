import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal ${className ? className : ""}`} onClick={onClose}>
    	<div className="modal-overlay">
	      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
	        {children}
	      </div>
	    </div>
    </div>
  );
};

export default Modal;