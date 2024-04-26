import React from 'react';

const Input = ({ icon , label, id, name, placeholder, className, type }) => {
  const InputField = id === 'message' ? 'textarea' : 'input';

  return (
    <div className={`input_group ${className ? className : ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <InputField type={type} id={id} name={name} placeholder={placeholder} autoComplete="off"/>
      {icon && icon}
    </div>
  );
};

export default Input;
