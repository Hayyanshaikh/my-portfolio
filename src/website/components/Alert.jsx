import React from 'react';
import { TbCheck, TbAlertCircle, TbAlertTriangle, TbInfoCircle } from 'react-icons/tb';

const Alert = ({ message, type, show }) => {
  if (!show) return null;

  const alertClass = `alert alert-${type}`;

  const renderIcon = (type) => {
    switch (type) {
      case 'success':
        return <TbCheck />;
      case 'danger':
        return <TbAlertCircle />;
      case 'warning':
        return <TbAlertTriangle />;
      case 'info':
        return <TbInfoCircle />;
      default:
        return null;
    }
  };

  return (
    <div className={alertClass} role="alert">
      <span className="alert-icon">{renderIcon(type)}</span>
      {message}
    </div>
  );
};

export default Alert;
