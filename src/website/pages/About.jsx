import React, { useState } from "react";
import * as Tabler from "react-icons/tb";
import Button from "../components/Button.jsx";
import Banner from '../components/Banner.jsx';

const About = () => {
	return (
		<>
      <Banner>About <span>us</span></Banner>
      
      {/* Counter */}
      <section className="counter bg">
        <div className="container">
          <div className="counter_wrapper">
              <div class="work_count"><span class="count">2Y+</span>
                <p class="work_text">Years Of Experience</p>
              </div>
              <div class="work_count"><span class="count">48+</span>
                <p class="work_text">Project Complete</p>
              </div>
              <div class="work_count"><span class="count">76%</span>
                <p class="work_text">Client Satisfactions</p>
              </div>
            </div>
        </div>
      </section>
      {/* About me */}
      <section className="about_me">
        <div className="container">
          <div className="about_me_wrapper">
            <div className="about_me_content">
              <div className="heading_wrapper">
                <span className="heading_title">About me</span>
                <h2 className="heading">
                  Professional <span>Problem Solutions</span> For Digital
                  Products
                </h2>
              </div>
              <p className="about_me_text">
                At vero eos et accusamus etodio dignissimos ducimus praesentium
                voluptatum corrupti quos dolores quas molestias excepturi sint
                occaecati cupiditate provident qui officia deserunt mollitia
                animi, id est laborum et dolorum.
              </p>
              <div className="about_me_top_skills">
                <div className="about_skill">
                  <Tabler.TbCheck />
                  <span>Branding &amp; Design</span>
                </div>
                <div className="about_skill">
                  <Tabler.TbCheck />
                  <span>Web Development</span>
                </div>
                <div className="about_skill">
                  <Tabler.TbCheck />
                  <span>Digital Marketing</span>
                </div>
                <div className="about_skill">
                  <Tabler.TbCheck />
                  <span>Product Design</span>
                </div>
              </div>
              <div className="about_me_contact">
                <div className="about_contact">
                  <Tabler.TbMail />
                  <div className="about_contact_content">
                    <span className="contact_slogan">Email</span>
                    <p className="contact_text">hayyanshaikh@gmail.com</p>
                  </div>
                </div>
                <div className="about_contact">
                  <Tabler.TbPhone />
                  <div className="about_contact_content">
                    <span className="contact_slogan">Phone</span>
                    <p className="contact_text">03172271459</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about_me_img"></div>
          </div>
        </div>
      </section>
      {/* Work Experience */}
      <section className="bg">
        <div className="container">
          <div className="">
            <div className="heading_wrapper center">
              <span className="heading_title">Work Experience</span>
              <h2 className="heading">
                Years of <span>Professional</span> <br/> Experience
              </h2>
            </div>
          </div>
        </div>
      </section>
		</>
	)
}

export default About