import React, { useState, useEffect, useRef } from 'react';
import { TbChevronDown } from "react-icons/tb";

const CustomSelect = ({ id, label, name, options, className, onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option, id) => {
    setSelectedOption(option);
    toggleDropdown();
    onSelect(option.value, id);
  };

  return (
    <div ref={selectRef} className="input_group custom-select">
      <label htmlFor={id}>{label}</label>
      <div className="input_box">
        <button type="button" id={id} className="select" onClick={toggleDropdown}>
          <span>{selected ? selected : selectedOption ? selectedOption.label : "Please Select"}</span>
          <TbChevronDown />
        </button>
      </div>
      {isOpen && (
        <div className="options">
          {options.map(option => (
            <button
              key={option.value}
              type="button"
              className="option"
              onClick={() => handleOptionSelect(option, id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
