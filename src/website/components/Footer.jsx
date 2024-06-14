import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as Phosphor from "react-icons/pi";
import * as Tabler from "react-icons/tb";
import Logo from "../../assets/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectProjects } from '../../redux/slices/projectSlice.jsx';
import { fetchProjects } from '../../redux/actions/projectAction.jsx';
import { selectUser } from '../../redux/slices/userSlice.jsx';
import { getUserAsync } from '../../redux/actions/userAction.jsx';
import { selectSettings } from '../../redux/slices/settingSlice.jsx';
import { getSettingsAsync } from '../../redux/actions/settingAction.jsx';

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
  }, [dispatch]);

  const quickLinks = [
    { id: 1, title: "About", link: "/#about" },
    { id: 2, title: "Services", link: "/#services" },
    { id: 3, title: "Skills", link: "/#skills" },
    { id: 4, title: "Projects", link: "/projects" },
    { id: 5, title: "Packages", link: "/#packages" },
    { id: 6, title: "Contact", link: "/#contact" }
  ];

  const socialLinks = [
    { href: setting && setting.github, icon: <Tabler.TbBrandGithub /> },
    { href: setting && setting.whatsapp, icon: <Tabler.TbBrandWhatsapp /> },
    { href: setting && setting.linkedin, icon: <Tabler.TbBrandLinkedin /> },
    { href: setting && setting.twitter, icon: <Tabler.TbBrandTwitter /> },
    { href: setting && setting.instagram, icon: <Tabler.TbBrandInstagram /> },
    { href: setting && setting.telegram, icon: <Tabler.TbBrandTelegram /> },
  ];

  return (
    <footer className="dark-mode">
      <div className="container">
        <div className="footer_column">
          <Link className="logo">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="header_socials">
            {socialLinks.map((link, index) =>
              link.href ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" key={index}>
                  {link.icon}
                </a>
              ) : null
            )}
          </div>
        </div>
        <div className="footer_wrapper">
          <div className="footer_column">
            <h4 className="footer_heading">Quick Links</h4>
            <ul className="footer_list">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.link}>
                    <Phosphor.PiCaretDoubleRight />
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
                <span>{user && user.location}</span>
              </li>
              <li>
                <Phosphor.PiEnvelope />
                <Link to={`mailto:${user && user.email}`}><span>{user && user.email}</span></Link>
              </li>
              <li>
                <Phosphor.PiPhone />
                <Link to={`tel:${user && user.phoneNumber}`}><span>{user && user.phoneNumber}</span></Link>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <h4 className="footer_heading">Our Work</h4>
            <ul className="footer_list">
              {projects.slice(0, 2).map((project) => (
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