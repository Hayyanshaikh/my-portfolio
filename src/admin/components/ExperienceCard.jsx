import React from 'react';

const ExperienceCard = ({ imgSrc, imgAlt, title, startDate, endDate, jobTitle }) => (
	<div className="experience_card">
		<figure className="experience_img">
			<img src={imgSrc} alt={imgAlt} />
		</figure>
		<div className="experience_content">
			<h4 className="experience_title">{title}</h4>
			<p className="job_title">{jobTitle}</p>
			<div className="experience_date">
				<span>{startDate}</span>
				<span>-</span>
				<span>{endDate}</span>
			</div>
		</div>
	</div>
);

export default ExperienceCard;