import React from 'react';

const SkillCard = ({ image, text, ...restProps }) => {
  return (
    <div className="skill_card card" {...restProps}>
      <figure className="skill_image">
        <img src={image} alt="Skill" />
      </figure>
      <p className="skill_text">{text}</p>
    </div>
  );
};

export default SkillCard;