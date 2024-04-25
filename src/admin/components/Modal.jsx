import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
    	<div className="modal-overlay">
	      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
	        {children}
	      </div>
	    </div>
    </div>
  );
};

export default Modal;