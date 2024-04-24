import React from 'react';

const Input = ({ icon , label, id, name, placeholder, className }) => {
  const InputField = id === 'message' ? 'textarea' : 'input';

  return (
    <div className={`input_group ${className ? className : ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <InputField id={id} name={name} placeholder={placeholder} />
      {icon && icon}
    </div>
  );
};

export default Input;