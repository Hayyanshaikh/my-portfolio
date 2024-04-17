import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Button = ({ children, to, ...restProps }) => {
  if (to) {
    return (
      <Link to={to} className="btn" {...restProps}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className="btn" {...restProps}>
        {children}
      </button>
    );
  }
};

export default Button;
