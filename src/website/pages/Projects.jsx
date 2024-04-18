import React from "react";
import { Element } from 'react-scroll';
import * as Tabler from "react-icons/tb";
import Button from "../components/Button.jsx";
import Banner from '../components/Banner.jsx';
import WorkCardV2 from "../components/WorkCardV2.jsx";

const Projects = () => {
	return (
     <>
     <Banner>My <span>work</span></Banner>
     {/* work */}
      <Element name="projects">
        <section className="work bg">
          <div className="container">
            <div className="projects_grid">
            	<WorkCardV2
                title="Website Mockup Design"
                description="We provide stunning website mockup designs tailored to your needs."
                category="Design"
                imageUrl="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg"
              />
              <WorkCardV2
                title="Mobile App Design"
                description="Our expert designers craft beautiful mobile app designs for your business."
                category="Design"
                imageUrl="https://cdn.dribbble.com/userupload/3246132/file/original-d17aaff41fec3353fe80fc8f7372253e.png"
              />
              <WorkCardV2
                title="Brand Identity and Motion Design"
                description="We specialize in creating unique brand identities and captivating motion designs."
                category="Design"
                imageUrl="https://cdn.dribbble.com/userupload/13811655/file/original-60b55a5fb25841372b5ca18c5b50be7c.jpg"
              />
            </div>
          </div>
        </section>
      </Element>
     </>
	)
}

export default Projects