import React from 'react';
import * as Tabler from "react-icons/tb";
import { Link } from "react-router-dom";

const WorkCard = ({ id, imageUrl, category, title, description, ...restProps }) => {
  return (
    <div className="work_card_v2" {...restProps}>
      <figure className="work_img">
        <img src={imageUrl} alt="" />
      </figure>
      <div className="work_content">
        <hgroup>
        	<span className="work_category">{category}</span>
	        <Link to={id} className="work_title">{title}</Link>
        </hgroup>
        <Link to={id}>
	       <Tabler.TbArrowUpRight/>
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;