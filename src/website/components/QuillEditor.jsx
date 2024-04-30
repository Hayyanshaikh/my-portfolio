import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = ({ icon , label, id, name, placeholder, className }) => {
  const [value, setValue] = useState('');
  return (
    <div className={`input_group input_quill ${className ? className : ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      {icon && icon}
    </div>
  )
}

export default QuillEditor;