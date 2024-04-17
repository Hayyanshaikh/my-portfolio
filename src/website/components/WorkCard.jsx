import React from 'react';
import * as Tabler from "react-icons/tb";

const WorkCard = ({ imageUrl, category, title, description, ...restProps }) => {
  return (
    <div className="work_card" {...restProps}>
      <figure className="work_img">
        <img src={imageUrl} alt="" />
      </figure>
      <div className="work_content">
        <hgroup>
        	<span className="work_category">{category}</span>
	        <h4 className="work_title">{title}</h4>
	        <p className="work_description">{description}</p>
	        <Tabler.TbArrowUpRight/>
        </hgroup>
      </div>
    </div>
  );
};

export default WorkCard;