import React from 'react';
import * as Tabler from "react-icons/tb";
import { Link } from "react-router-dom";

const WorkCard = ({ id, imageUrl, service, title, description, ...restProps }) => {
  return (
    <div className="work_card" {...restProps}>
      <figure className="work_img">
        <img src={imageUrl} alt="" />
      </figure>
      <div className="work_content">
        <hgroup>
          <span className="work_category">{service}</span>
          <Link to={`projects/${id}`} className="work_title">{title}</Link>
          <p className="work_description">{description}</p>
          <Link to={`projects/${id}`}>
           <Tabler.TbArrowUpRight/>
          </Link>
        </hgroup>
      </div>
    </div>
  );
};

export default WorkCard;