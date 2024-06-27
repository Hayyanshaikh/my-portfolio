import React, { useState, useEffect, useRef } from 'react';
import { TbChevronDown, TbSearch } from "react-icons/tb";
import Input from "../../website/components/Input.jsx";

const CustomSelect = ({ id, label, name, options, className, onSelect, selected, onSearchChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [searchTerm, setSearchTerm] = useState("");
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
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={selectRef} className={`input_group custom-select ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="input_box">
        {
          isOpen ? (
            <div className="search-box">
              <Input
                icon={<TbSearch />}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
            </div>
          ) : (
            <button type="button" id={id} className="select" onClick={toggleDropdown}>
              <span>{selected ? selected : selectedOption ? selectedOption.label : "Please Select"}</span>
              <TbChevronDown />
            </button>
          )
        }
      </div>
      {isOpen && (
        <div className="options">
          {filteredOptions.map(option => (
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
