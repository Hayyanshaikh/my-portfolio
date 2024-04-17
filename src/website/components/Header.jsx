import { Link } from "react-router-dom";
import * as Tabler from "react-icons/tb";
import * as Phosphor from "react-icons/pi";
import { Link as ScrollLink, Element } from 'react-scroll';
import Logo from "../../assets/images/logo.svg";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DarkLogo from "../../assets/images/logo-dark.svg";
import { mode } from "../../redux/slices/ThemeSlice.jsx";

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [previousPosition, setPreviousPosition] = useState(0);

  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(mode());
  };

  document.body.classList.toggle("dark-mode", themeMode);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > previousPosition && !isScrollingDown) {
        setIsScrollingDown(true);
      } else if (currentPosition < previousPosition && isScrollingDown) {
        setIsScrollingDown(false);
      }
      setPreviousPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingDown, previousPosition]);

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
            <nav className={!isScrollingDown ? "active" : ""}>
              <ul className="menu">
                <li>
                  <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
                    <Phosphor.PiHouse />
                    <span>Home</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="about" smooth={true} duration={500}>
                    <Phosphor.PiUser />
                    <span>About</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="services" smooth={true} duration={500}>
                    <Phosphor.PiGear />
                    <span>Services</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="skills" smooth={true} duration={500}>
                    <Phosphor.PiStack />
                    <span>Skills</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="portfolio" smooth={true} duration={500}>
                    <Phosphor.PiPenNib />
                    <span>Portfolio</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="packages" smooth={true} duration={500}>
                    <Phosphor.PiPackage />
                    <span>Packages</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contact" smooth={true} duration={500}>
                    <Phosphor.PiPhoneCall />
                    <span>Contact</span>
                  </ScrollLink>
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
