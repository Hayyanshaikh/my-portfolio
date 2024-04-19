import React from "react";
import { Element } from 'react-scroll';
import * as Tabler from "react-icons/tb";
import Button from "../components/Button.jsx";
import WorkCard from "../components/WorkCard.jsx";
import SkillCard from "../components/SkillCard.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import PackageCard from "../components/PackageCard.jsx";

const Home = () => {
  return (
    <>
      {/* hero section*/}
      <Element name="/">
        <section className="hero">
          <div className="container">
            <div className="hero_main">
              <div className="hero_content">
                <h1 className="hero_heading">
                  <span>Hello, i'm</span>
                  <strong>Hayyan ali</strong>
                  <p>Web Developer</p>
                </h1>
                <p>
                  We denounce with righteous indignation dislike demoralized by
                  the charms of pleasure
                </p>
                <div className="buttons_gourp">
                  <Button className="btn">
                    <span>hire me</span>
                    <Tabler.TbChevronRight />
                  </Button>
                  <Button className="text_btn">
                    <span>Download Resume</span>
                    <Tabler.TbChevronRight />
                  </Button>
                </div>
              </div>
              <div className="work_counter">
                <div className="work_count">
                  <span className="count">2Y+</span>
                  <p className="work_text">Years Of Experience</p>
                </div>
                <div className="work_count">
                  <span className="count">48+</span>
                  <p className="work_text">Project Complete</p>
                </div>
                <div className="work_count">
                  <span className="count">76%</span>
                  <p className="work_text">Client Satisfactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
      {/* About me */}
      <Element name="about">
        <section className="about_me bg">
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
                  animi, id est laborum et dolorum
                  <Button to="about" className="text_btn">
                    <span>Read more</span>
                    <Tabler.TbArrowNarrowRight />
                  </Button>
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
      </Element>
      {/* Services */}
      <Element name="services">
        <section className="services">
          <div className="container">
            <div className="heading_wrapper center">
              <span className="heading_title">Popular Services</span>
              <h2 className="heading">
                My <span>Special Service</span> For your Business Development
              </h2>
            </div>
            <div className="services_wrapper">
              <ServiceCard
                count="01."
                title="Brand Identity Design"
                description="Dignissimos ducimus blanditiis praesen"
              />
              <ServiceCard
                count="02."
                title="Web Design & Development"
                description="Craft stunning and functional websites that engage your audience."
              />
              <ServiceCard
                count="03."
                title="Content Marketing"
                description="Create compelling content that attracts, converts, and retains leads."
              />
              <ServiceCard
                count="04."
                title="Search Engine Optimization (SEO)"
                description="Improve your website's visibility and organic traffic through SEO strategies."
              />
              <ServiceCard
                count="05."
                title="Social Media Marketing"
                description="Connect with your audience and grow your brand on social media platforms."
              />
              <ServiceCard
                count="06."
                title="Graphic Design"
                description="Create eye-catching visuals that elevate your brand identity."
              />
            </div>
          </div>
        </section>
      </Element>
      {/* Skills */}
      <Element name="skills">
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
                  <Button className="btn" to="skills">
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
      </Element>
      {/* work */}
      <Element name="projects">
        <section className="work">
          <div className="container">
            <div className="heading_wrapper center">
              <span className="heading_title">Latest Works</span>
              <h2 className="heading">
                Explore My Popular <span>Projects</span>
              </h2>
            </div>
            <div className="work_wrapper">
              <WorkCard
                title="Website Mockup Design"
                description="We provide stunning website mockup designs tailored to your needs."
                category="Design"
                imageUrl="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg"
              />
              <WorkCard
                title="Mobile App Design"
                description="Our expert designers craft beautiful mobile app designs for your business."
                category="Design"
                imageUrl="https://cdn.dribbble.com/userupload/3246132/file/original-d17aaff41fec3353fe80fc8f7372253e.png"
              />
              <WorkCard
                title="Brand Identity and Motion Design"
                description="We specialize in creating unique brand identities and captivating motion designs."
                category="Design"
                imageUrl="https://cdn.dribbble.com/userupload/13811655/file/original-60b55a5fb25841372b5ca18c5b50be7c.jpg"
              />
              <WorkCard
                title="Mobile Application Development"
                description="Our skilled developers build high-quality mobile applications for iOS and Android platforms."
                category="Development"
                imageUrl="https://cdn.dribbble.com/users/7306574/screenshots/17359664/media/1e1f73d6a4c5e498e21cfab91d7d1d5c.png"
              />
              <Button to="projects">
                <span>View More Projects</span>
                <Tabler.TbChevronRight />
              </Button>
            </div>
          </div>
        </section>
      </Element>
      {/* Packages */}
      <Element name="packages">
        <section className="packages bg">
          <div className="container">
            <div className="heading_wrapper center">
              <span className="heading_title">Pricing Package</span>
              <h2 className="heading">
                Amazing <span>Pricing</span> For your Projects
              </h2>
            </div>
            <div className="packages_wrapper">
              <PackageCard
                tier="Basic Plan"
                price="$19.95"
                discountRate="20%"
                desc="Ideal for beginners"
                features={[
                  { name: "Responsive Website Design", included: true },
                  { name: "Basic SEO Optimization", included: true },
                  { name: "Contact Form Integration", included: true },
                  { name: "Mobile Optimization", included: false },
                  { name: "Social Media Integration", included: false },
                  { name: "Basic Analytics", included: false },
                ]}
              />
              <PackageCard
                tier="Standard Plan"
                price="$39.95"
                discountRate="15%"
                desc="Perfect for small businesses"
                features={[
                  { name: "Responsive Website Design", included: true },
                  { name: "Advanced SEO Optimization", included: true },
                  { name: "E-commerce Integration", included: true },
                  { name: "Mobile Optimization", included: true },
                  { name: "Social Media Integration", included: false },
                  { name: "Basic Analytics", included: false },
                ]}
              />
              <PackageCard
                tier="Premium Plan"
                price="$59.95"
                discountRate="10%"
                desc="Best for established businesses"
                features={[
                  { name: "Custom Website Design", included: true },
                  { name: "Full SEO Audit and Strategy", included: true },
                  { name: "Advanced E-commerce Solutions", included: true },
                  { name: "Mobile Optimization", included: true },
                  { name: "Social Media Integration", included: true },
                  { name: "Advanced Analytics", included: true },
                ]}
              />
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Home;
