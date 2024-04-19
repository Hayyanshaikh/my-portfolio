import React, { useState } from "react";
import * as Tabler from "react-icons/tb";
import Button from "../components/Button.jsx";
import Banner from '../components/Banner.jsx';
import SkillCard from "../components/SkillCard.jsx";

const Skills = () => {
	return (
		<>
      <Banner>Professional <span>skills</span></Banner>

      {/* Skills */}
      <section className="skills bg">
        <div className="container">
          <div className="skills_wrapper">
            <div className="skills_content">
              <div className="heading_wrapper">
                <span className="heading_title">My Skills</span>
                <h2 className="heading">
                  Let's Explore Popular <br />
                  <span>Skills & Experience</span>
                </h2>
                <p className="skills_text">
                  Sed ut perspiciatis unde omnis iste natus to voluptatem
                  accusantium doloremque laudantium, totam rem aperiamc eaque
                  ipsa quae ab illo inventore veritatis
                </p>
                <Button className="btn">
                  <span>Learn More</span>
                  <Tabler.TbChevronRight />
                </Button>
              </div>
            </div>
            <div className="skills_list">
              <SkillCard
                image="https://img.icons8.com/color/1600/html-5.png"
                text="HTML"
              />
              <SkillCard
                image="https://img.icons8.com/color/1600/css3.png"
                text="CSS"
              />
              <SkillCard
                image="https://img.icons8.com/color/1600/javascript.png"
                text="JavaScript"
              />
              <SkillCard
                image="https://img.icons8.com/color/1600/figma.png"
                text="Figma"
              />
              <SkillCard
                image="https://img.icons8.com/color/1600/firebase.png"
                text="Firebase"
              />
              <SkillCard
                image="https://img.icons8.com/color/1600/tailwindcss.png"
                text="Tailwind CSS"
              />
              <SkillCard
                image="https://img.icons8.com/color/1600/wordpress.png"
                text="Wordpress"
              />
              <SkillCard
                image="https://img.icons8.com/color/1600/bootstrap--v2.png"
                text="Bootstrap"
              />
              <SkillCard
                image="https://img.icons8.com/color/1600/react-native.png"
                text="React JS"
              />
              <SkillCard
                image="https://img.icons8.com/color/1600/git.png"
                text="Github"
              />
            </div>
          </div>
        </div>
      </section>
		</>
	)
}

export default Skills