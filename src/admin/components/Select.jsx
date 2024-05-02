import React, { useState, useEffect, useRef } from 'react';
import { TbChevronDown } from "react-icons/tb";

const CustomSelect = ({ id, label, name, options, className, selectedOption: initialSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialSelectedOption || options[0]);
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

  useEffect(() => {
    if (initialSelectedOption) {
      setSelectedOption(initialSelectedOption);
    }
  }, [initialSelectedOption]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <div ref={selectRef} className="input_group custom-select">
      {<label htmlFor={id}>{label}</label>}
      <button id={id} className="select" onClick={toggleDropdown}>
        <span>{selectedOption.label}</span>
        <TbChevronDown />
      </button>
      {isOpen && (
        <div className="options">
          {options.map(option => (
            <button
              key={option.value}
              className="option"
              onClick={() => handleOptionSelect(option)}
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