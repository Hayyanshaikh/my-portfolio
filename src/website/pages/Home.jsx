import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import * as Tabler from "react-icons/tb";
import WebLayout from "../WebLayout.jsx";
import Button from "../components/Button.jsx";
import useTitle from "../../hooks/useTitle.jsx";
import WorkCard from "../components/WorkCard.jsx";
import SkillCard from "../components/SkillCard.jsx";
import { useSelector, useDispatch } from "react-redux";
import ServiceCard from "../components/ServiceCard.jsx";
import Favicon from "../../assets/images/hero_icon.svg";
import PackageCard from "../components/PackageCard.jsx";
import { selectProjects } from "../../redux/slices/projectSlice.jsx";
import { fetchProjects } from "../../redux/actions/projectAction.jsx";
import { selectServices } from "../../redux/slices/serviceSlice.jsx";
import { fetchServices } from "../../redux/actions/serviceAction.jsx";
import { selectSkills } from "../../redux/slices/skillSlice.jsx";
import { fetchSkills } from "../../redux/actions/skillAction.jsx";
import { selectPrices } from "../../redux/slices/priceSlice.jsx";
import { fetchPrices } from "../../redux/actions/priceAction.jsx";
import { selectPackages } from "../../redux/slices/packageSlice.jsx";
import { fetchPackages } from "../../redux/actions/packageAction.jsx";
import { selectUser } from "../../redux/slices/userSlice.jsx";
import { getUserAsync } from "../../redux/actions/userAction.jsx";
import { selectResumes } from "../../redux/slices/resumeSlice.jsx";
import { fetchResumes } from "../../redux/actions/resumeAction.jsx";
import {
  fadeUpVariant,
  zoomInVariant,
  fadeDownVariant,
  fadeLeftVariant,
} from "../../animation/FramerAnimation.jsx";

const Home = () => {
  useTitle("Home");
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const services = useSelector(selectServices);
  const skills = useSelector(selectSkills);
  const prices = useSelector(selectPrices);
  const packages = useSelector(selectPackages);
  const userData = useSelector(selectUser);
  const resumes = useSelector(selectResumes);
  const [user, setUser] = useState("");
  const activeResume = resumes && resumes.find((resume) => resume.active);

  useEffect(() => {
    if (userData) {
      setUser(userData[0]);
    }
  }, [userData]);

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchServices());
    dispatch(fetchSkills());
    dispatch(fetchPrices());
    dispatch(fetchPackages());
    dispatch(getUserAsync());
    dispatch(fetchResumes());
  }, []);

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Hello, I am interested in hiring your services. Can we discuss further details?`
    );
    const phoneNumber = "923172271459";
    return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`;
  };

  return (
    <>
      {/* hero section*/}
      <Element name="">
        <section className="hero">
          <div className="container">
            <div className="hero_main">
              <div className="hero_content">
                <h1 className="hero_heading">
                  <motion.span
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={4}
                  >
                    Hello, i'm
                  </motion.span>
                  <motion.strong
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={5}
                  >
                    {user ? user.firstName : "Hayyan Ali"}{" "}
                    {user && user.lastName}
                  </motion.strong>
                  <motion.p
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={6}
                  >
                    {user ? user.jobTitle : "Web Developer"}
                  </motion.p>
                </h1>
                <motion.p
                  variants={fadeUpVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={7}
                >
                  Creating engaging and responsive websites with modern technologies and best practices.
                </motion.p>
                <motion.div
                  variants={fadeUpVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={8}
                  className="buttons_gourp"
                >
                  <Button className="btn" to={generateWhatsAppLink()} target="_blank">
                    <span>hire me</span>
                    <Tabler.TbChevronRight />
                  </Button>
                  <Button
                    to={activeResume && activeResume.featureImage}
                    target="_blank"
                    download={true}
                    className="text_btn"
                  >
                    <span>Download Resume</span>
                    <Tabler.TbChevronRight />
                  </Button>
                </motion.div>
              </div>

              <div className="hero_img">
                <motion.div
                  variants={zoomInVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={1}
                  className="hero_logo"
                >
                  <img src={Favicon} alt="" />
                </motion.div>

                <div className="work_counter">
                  <motion.div
                    className="work_count"
                    variants={fadeDownVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={4}
                  >
                    <span className="count">2+</span>
                    <p className="work_text">Years Of Experience</p>
                  </motion.div>

                  <motion.div
                    className="work_count"
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={6}
                  >
                    <span className="count">48+</span>
                    <p className="work_text">Project Complete</p>
                  </motion.div>
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
              <motion.div
                className="about_me_content"
                variants={fadeUpVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
              >
                <motion.div
                  className="heading_wrapper"
                  variants={fadeUpVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                >
                  <span className="heading_title">About me</span>
                  <h2 className="heading">
                    Professional <span>Problem Solutions</span> For Digital
                    Products
                  </h2>
                </motion.div>
                <motion.p
                  className="about_me_text"
                  variants={fadeUpVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={3}
                >
                  {user && user.about}
                </motion.p>
                <motion.div
                  className="about_me_top_skills"
                  variants={fadeUpVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={4}
                >
                  {services &&
                    services.slice(0, 4).map((service, key) => (
                      <motion.div
                        className="about_skill"
                        key={key}
                        variants={fadeUpVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={5}
                      >
                        <Tabler.TbCheck />
                        <span>{service.title}</span>
                      </motion.div>
                    ))}
                </motion.div>
                <motion.div
                  className="about_me_contact"
                  variants={fadeUpVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={6}
                >
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
                </motion.div>
              </motion.div>
              <motion.figure
                variants={fadeLeftVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={3}
                className="about_me_img"
              >
                <img src={user && user.imageUrl} alt="" />
              </motion.figure>
            </div>
          </div>
        </section>
      </Element>
      {/* Services */}
      <Element name="services">
        <section className="services">
          <div className="container">
            <div className="heading_wrapper center">
              <motion.span
                className="heading_title"
                variants={fadeUpVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
              >
                Popular Services
              </motion.span>
              <motion.h2
                className="heading"
                variants={fadeUpVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={2}
              >
                My <span>Special Service</span> For your Business Development
              </motion.h2>
            </div>
            <div className="services_wrapper">
              {services &&
                services.map((service, key) => (
                  <motion.div
                    key={key}
                    className="service_card_wrapper"
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={key + 2} // different custom value to stagger animation
                  >
                    <ServiceCard
                      icon={service.featureImage}
                      title={service.title}
                      description={service.description}
                    />
                  </motion.div>
                ))}
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
                  <motion.span
                    className="heading_title"
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={1}
                  >
                    My Skills
                  </motion.span>
                  <motion.h2
                    className="heading"
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={2}
                  >
                    Let's Explore Popular <br />
                    <span>Skills & Experience</span>
                  </motion.h2>
                  <motion.p
                    className="skills_text"
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={3}
                  >
                    Passionate about crafting user-friendly and efficient web applications using modern technologies and best practices to deliver exceptional user experiences.
                  </motion.p>
                </div>
              </div>
              <div className="skills_list">
                {skills &&
                  skills
                    .filter((featuredSkill) => featuredSkill.featured)
                    .map((skill, key) => (
                      <motion.div
                        key={key}
                        className="skill_card_wrapper"
                        variants={fadeUpVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={key + 4} // custom value to stagger animation
                      >
                        <SkillCard
                          image={skill.featureImage}
                          text={skill.title}
                        />
                      </motion.div>
                    ))}
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
              <motion.span
                className="heading_title"
                variants={fadeUpVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
              >
                Latest Works
              </motion.span>
              <motion.h2
                className="heading"
                variants={fadeUpVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={2}
              >
                Explore My Popular <span>Projects</span>
              </motion.h2>
            </div>
            <div className="work_wrapper">
              {projects &&
                projects
                  .filter((featured) => featured.featured)
                  .map((project, key) => (
                    <motion.div
                      key={key}
                      className="work_card_wrapper"
                      variants={fadeUpVariant}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={key + 3} // custom value to stagger animation
                    >
                      <WorkCard
                        id={project.id}
                        title={project.title}
                        description={project.shortDescription}
                        service={project.service}
                        imageUrl={project.featureImage}
                      />
                    </motion.div>
                  ))}
              <motion.div
              className="button_wrapper"
              variants={fadeUpVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1} // custom value to stagger animation
            >
              <Button to="projects">
                <span>View More Projects</span>
                <Tabler.TbChevronRight />
              </Button>
            </motion.div>
            </div>
          </div>
        </section>
      </Element>
      {/* Packages */}
      <Element name="packages">
        <section className="packages bg">
          <div className="container">
            <div className="heading_wrapper center">
              <motion.span
                className="heading_title"
                variants={fadeUpVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={1}
              >
                Pricing Package
              </motion.span>
              <motion.h2
                className="heading"
                variants={fadeUpVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={2}
              >
                Amazing <span>Pricing</span> For your Projects
              </motion.h2>
            </div>
            <div className="packages_wrapper">
              {packages
                .filter((filterpkg) => filterpkg.featured)
                .map((pkg, pkgKey) => {
                  return prices.map((price, key) => {
                    if (pkg.id === price.pkgId) {
                      return (
                        <motion.div
                          key={key}
                          className="package_card_wrapper"
                          variants={fadeUpVariant}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                          custom={key + 1}
                        >
                          <PackageCard
                            title={pkg.title}
                            tier={price.tier}
                            price={price.price}
                            salePrice={price.salePrice}
                            desc={pkg.description}
                            features={price.features}
                          />
                        </motion.div>
                      );
                    }
                    return null;
                  });
                })}
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Home;
