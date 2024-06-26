import React from 'react';
import * as Tabler from "react-icons/tb";

const ServiceCard = ({ count, title, description, icon, ...restProps }) => {
  return (
    <div className="service_card card" {...restProps}>
      <figure className="service_img">
        <img src={icon} alt="icon"/>
      </figure>
      <div className="service_content">
        <h4 className="service_title">{title}</h4>
        <p className="service_description">{description}</p>
      </div>
      <Tabler.TbArrowUpRight/>
    </div>
  );
};

export default ServiceCard;
