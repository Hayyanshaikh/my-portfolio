import React, { useState, useEffect, useRef } from 'react';
import { TbChevronDown } from "react-icons/tb";

const CustomSelect = ({ id, label, name, options, className, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
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
    if (options) {
      setSelectedOption(options[0]);
    }
  }, [options]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleDropdown();
    onSelect(option.value); // Invoke the onSelect callback with the selected value
  };

  return (
    <div ref={selectRef} className="input_group custom-select">
      <label htmlFor={id}>{label}</label>
      <div className="input_box">
        <button type="button" id={id} className="select" onClick={toggleDropdown}>
          <span>{selectedOption && selectedOption.label}</span>
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
