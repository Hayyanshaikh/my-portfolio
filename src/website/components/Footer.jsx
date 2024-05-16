import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as Phosphor from "react-icons/pi";
import * as Tabler from "react-icons/tb";
import Logo from "../../assets/images/logo.svg";
import {selectProjects} from '../../redux/slices/projectSlice.jsx';
import {fetchProjects} from '../../redux/actions/projectAction.jsx';
import { useSelector, useDispatch } from "react-redux";
import {selectUser} from '../../redux/slices/userSlice.jsx';
import {getUserAsync} from '../../redux/actions/userAction.jsx';
import {selectSettings} from '../../redux/slices/settingSlice.jsx';
import {getSettingsAsync} from '../../redux/actions/settingAction.jsx';

const Footer = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const projects = useSelector(selectProjects);
  const [user, setUser] = useState("");
  const settings = useSelector(selectSettings);
  const setting = settings && settings[0];

  useEffect(() => {
    if (userData) {
      setUser(userData[0]);
    }
  }, [userData]);

  useEffect(() => {
    dispatch(getUserAsync());
    dispatch(getSettingsAsync());
    dispatch(fetchProjects());
  }, []);


  // Sample quick links data
  const quickLinks = [
    { id: 1, title: "About", link: "/#about" },
    { id: 2, title: "Services", link: "/#services" },
    { id: 3, title: "Skills", link: "/#skills" },
    { id: 4, title: "Projects", link: "/projects" },
    { id: 5, title: "Packages", link: "/#packages" },
    { id: 6, title: "Contact", link: "/#contact" }
  ];

  return (
    <footer className="dark-mode">
      <div className="container">
        <div className="footer_column">
          <Link className="logo">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="header_socials">
            <a
                href={setting && setting.github}
                target="_blank"
              >
                <Tabler.TbBrandGithub />
              </a>
              <a
                href={setting && setting.whatsapp}
                target="_blank"
              >
                <Tabler.TbBrandWhatsapp />
              </a>
              <a
                href={setting && setting.linkedin}
                target="_blank"
              >
                <Tabler.TbBrandLinkedin />
              </a>
          </div>
        </div>
        <div className="footer_wrapper">
          <div className="footer_column">
            <h4 className="footer_heading">Quick Links</h4>
            <ul className="footer_list">
              {/* Loop through quick links and render each one */}
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.link}>
                    <Phosphor.PiCaretDoubleRight/>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_column">
            <h4 className="footer_heading">Address</h4>
            <ul className="footer_list">
              <li>
                <Phosphor.PiHouse />
                <span>{user.location}</span>
              </li>
              <li>
                <Phosphor.PiEnvelope />
                <span>{user.email}</span>
              </li>
              <li>
                <Phosphor.PiPhone />
                <span>{user.phoneNumber}</span>
              </li>
            </ul>

          </div>
          <div className="footer_column">
            <h4 className="footer_heading">Our Work</h4>
            <ul className="footer_list">
              {/* Loop through projects and render each one */}
              {projects.map((project) => (
                <li key={project.id}>
                  <Link to={`projects/${project.id}`}>
                    <figure className="footer_figure">
                      <img src={project.featureImage} alt={project.title} />
                      <figcaption>{project.title}</figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Hayyan Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;