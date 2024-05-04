import React from 'react';

const Input = ({ icon , label, id, name, placeholder, className, type, value, onChange, valid }) => {
  const InputField = id === 'message' ? 'textarea' : 'input';

  return (
    <div className={`input_group ${className ? className : ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="input_box">
        <InputField 
          type={type} 
          id={id} 
          name={name} 
          placeholder={placeholder} 
          autoComplete="off"
          value={value} 
          onChange={onChange} 
        />
        {icon && icon}
      </div>
      {valid ? <small>{valid}</small> : ""}
    </div>
  );
};

export default Input;