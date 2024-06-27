import React from 'react';
import * as Tabler from "react-icons/tb";
import User from "../../assets/images/user.webp";

const TestimonialCard = ({ featureImage, quote, customerName, title }) => {
  return (
    <div className="testimonial_card">
      <div className="testimonial_image">
        <div className="testimonial_quote_icon">
          <Tabler.TbQuote />
        </div>
        <img src={featureImage ? featureImage : User} alt="Profile Picture" />
      </div>
      <p className="testimonial_quote_text">{quote}</p>
      <h3 className="testimonial_name">{customerName}</h3>
      <p className="testimonial_title">{title}</p>
    </div>
  );
};

export default TestimonialCard;