import React, { useState, useEffect } from "react";
import Favicon from '../../assets/images/favicon.svg'
import { Element } from 'react-scroll';
import * as Tabler from "react-icons/tb";
import WebLayout from '../WebLayout.jsx';
import Button from "../components/Button.jsx";
import useTitle from '../../hooks/useTitle.jsx';
import WorkCard from "../components/WorkCard.jsx";
import SkillCard from "../components/SkillCard.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { useSelector, useDispatch } from "react-redux";
import PackageCard from "../components/PackageCard.jsx";
import {selectProjects} from '../../redux/slices/projectSlice.jsx';
import {fetchProjects} from '../../redux/actions/projectAction.jsx';
import {selectServices} from '../../redux/slices/serviceSlice.jsx';
import {fetchServices} from '../../redux/actions/serviceAction.jsx';
import {selectSkills} from '../../redux/slices/skillSlice.jsx';
import {fetchSkills} from '../../redux/actions/skillAction.jsx';
import {selectPrices} from '../../redux/slices/priceSlice.jsx';
import {fetchPrices} from '../../redux/actions/priceAction.jsx';
import {selectUser} from '../../redux/slices/userSlice.jsx';
import {getUserAsync} from '../../redux/actions/userAction.jsx';
import {selectResumes} from '../../redux/slices/resumeSlice.jsx';
import {fetchResumes} from '../../redux/actions/resumeAction.jsx';

const Home = () => {
  useTitle("Home");
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const services = useSelector(selectServices);
  const skills = useSelector(selectSkills);
  const prices = useSelector(selectPrices);
  const userData = useSelector(selectUser);
  const resumes = useSelector(selectResumes);
  const [user, setUser] = useState("");
  const activeResume = resumes && resumes.find(resume => resume.active);

  useEffect(() => {
    if (userData) {
      setUser(userData[0]);
    }
  }, [userData])

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchServices());
    dispatch(fetchSkills());
    dispatch(fetchPrices());
    dispatch(getUserAsync());
    dispatch(fetchResumes());
  }, []);
  

  return (
    <>
      {/* hero section*/}
      <Element name="">
        <section className="hero">
          <div className="container">
            <div className="hero_main">
              <div className="hero_content">
                <h1 className="hero_heading">
                  <span>Hello, i'm</span>
                  <strong>{user && user.firstName} {user && user.lastName}</strong>
                  <p>{user && user.jobTitle}</p>
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
                  <Button to={activeResume && activeResume.featureImage} target="_blank" download={true} className="text_btn">
                    <span>Download Resume</span>
                    <Tabler.TbChevronRight />
                  </Button>
                </div>
              </div>

              <div className="hero_logo">
                <img src={Favicon} alt=""/>
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
                  {user && user.about}
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
                      <p className="contact_text">{user && user.email}</p>
                    </div>
                  </div>
                  <div className="about_contact">
                    <Tabler.TbPhone />
                    <div className="about_contact_content">
                      <span className="contact_slogan">Phone</span>
                      <p className="contact_text">{user && user.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
              <figure className="about_me_img">
                <img src={user && user.imageUrl} alt="" />
              </figure>
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
              {
                services && services.map((service, key) => (
                  <ServiceCard
                    key={key}
                    icon={service.featureImage}
                    title={service.title}
                    description={service.description}
                  />
                ))
              }
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
                </div>
              </div>
              <div className="skills_list">
                {
                  skills && skills.filter(featuredSkill => featuredSkill.featured).map((skill, key)=>(
                    <SkillCard
                      key={key}
                      image={skill.featureImage}
                      text={skill.title}
                    />
                  ))
                }
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
              {
                projects && projects.filter(featured => featured.featured).map((project, key) => (
                  <WorkCard
                    key={key}
                    id={project.id}
                    title={project.title}
                    description={project.shortDescription}
                    service={project.service}
                    imageUrl={project.featureImage}
                  />
                ))
              }
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
              {
                prices.map((price, key) => (
                  <PackageCard
                    key={key}
                    tier={price.tier}
                    price={price.price}
                    discountRate="20%"
                    desc="Ideal for beginners"
                    features={price.features}
                  />
                ))
              }
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Home;
