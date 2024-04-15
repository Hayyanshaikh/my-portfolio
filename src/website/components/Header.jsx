import * as Tabler from "react-icons/tb";
import * as Phosphor from "react-icons/pi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import DarkLogo from "../../assets/images/logo-dark.svg";
import { mode } from "../../redux/slices/ThemeSlice.jsx";

const Header = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(mode());
  };

  document.body.classList.toggle("dark-mode", themeMode);

  return (
    <header>
      <div className="container">
        <div className="header_main">
          <Link className="logo">
            <img src={themeMode ? Logo : DarkLogo} alt="logo" />
          </Link>
          <div className="header_socials">
            <Link target="_blank" to="https://github.com/hayyanshaikh">
              <Tabler.TbBrandGithub />
            </Link>
            <Link
              target="_blank"
              to="https://api.whatsapp.com/send/?phone=923172271459&text=Hello%2C+I+am+interested+in+hiring+your+services.+Can+we+discuss+further+details%3F&type=phone_number&app_absent=0"
            >
              <Tabler.TbBrandWhatsapp />
            </Link>
            <Link target="_blank" to="https://www.linkedin.com/in/hayyan-shaikh/">
              <Tabler.TbBrandLinkedin />
            </Link>
          </div>
          <div className="header_rightside">
            <div className="theme">
              {themeMode ? <Tabler.TbSun /> : <Tabler.TbMoon />}
              <button
                className={`theme_toggle ${themeMode ? "active" : ""}`}
                onClick={toggleTheme}
              ></button>
              <span>{themeMode ? "light" : "dark"}</span>
            </div>
            <button className="menu_btn">
              <Tabler.TbAlignRight />
            </button>
            <nav>
              <ul className="menu">
                <li>
                  <Link to="/">
                    <Phosphor.PiHouse />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <Phosphor.PiUser />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <Phosphor.PiGear />
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/skills">
                    <Phosphor.PiStack />
                    <span>Skills</span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    <Phosphor.PiPenNib />
                    <span>Portfolio</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <Phosphor.PiPhoneCall />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
