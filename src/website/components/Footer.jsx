import React from 'react';
import { Link } from "react-router-dom";
import * as Phosphor from "react-icons/pi";
import Logo from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";
import DarkLogo from "../../assets/images/logo-dark.svg";

const Footer = () => {
  const themeMode = useSelector((state) => state.theme.mode);

  // Sample quick links data
  const quickLinks = [
    { id: 1, title: "About", link: "about" },
    { id: 2, title: "Services", link: "services" },
    { id: 3, title: "Skills", link: "skills" },
    { id: 4, title: "Projects", link: "projects" },
    { id: 5, title: "Packages", link: "packages" },
    { id: 6, title: "Contact", link: "contact" }
  ];

  // Sample address data
  const address = {
    street: "55 Main Street, 2nd block, New York City",
    email: "support@gmail.com",
    phone: "+880 (123) 456 88"
  };

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Website Mockup Design",
      imageUrl: "https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg",
      link: "/website-mockup-design"
    },
    {
      id: 2,
      title: "Mobile App Design",
      imageUrl: "https://cdn.dribbble.com/userupload/3246132/file/original-d17aaff41fec3353fe80fc8f7372253e.png",
      link: "/mobile-app-design"
    }
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_column">
            <Link className="logo">
              <img src={themeMode ? Logo : DarkLogo} alt="logo" />
            </Link>
          </div>
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
            <h4 className="footer_heading">Our Work</h4>
            <ul className="footer_list">
              {/* Loop through projects and render each one */}
              {projects.map((project) => (
                <li key={project.id}>
                  <Link to={project.link}>
                    <figure className="footer_figure">
                      <img src={project.imageUrl} alt={project.title} />
                      <figcaption>{project.title}</figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_column">
            <h4 className="footer_heading">Address</h4>
            <ul className="footer_list">
              {/* Loop through address data and render */}
              {Object.entries(address).map(([key, value]) => (
                <li key={key}>
                  {key === "street" && <Phosphor.PiHouse />}
                  {key === "email" && <Phosphor.PiEnvelope />}
                  {key === "phone" && <Phosphor.PiPhone />}
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;