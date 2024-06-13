import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as Tabler from "react-icons/tb";
import * as Phosphor from "react-icons/pi";
import Logo from "../../assets/images/logo.svg";
import DarkLogo from "../../assets/images/logo-dark.svg";
import { mode } from "../../redux/slices/ThemeSlice.jsx";
import {selectSettings} from '../../redux/slices/settingSlice.jsx';
import {getSettingsAsync} from '../../redux/actions/settingAction.jsx';

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [previousPosition, setPreviousPosition] = useState(0);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const location = useLocation();
  const settings = useSelector(selectSettings);
  const setting = settings && settings[0];

  useEffect(() => {
    dispatch(getSettingsAsync());
  }, []);

  const toggleTheme = () => {
    dispatch(mode());
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsScrollingDown(currentPosition > previousPosition);
      setPreviousPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousPosition]);

  const menuItems = [
    { to: "", icon: <Phosphor.PiHouse />, text: "Home" },
    { to: "about", icon: <Phosphor.PiUser />, text: "About" },
    { to: "services", icon: <Phosphor.PiGear />, text: "Services" },
    { to: "skills", icon: <Phosphor.PiStack />, text: "Skills" },
    { to: "projects", icon: <Phosphor.PiPenNib />, text: "Projects" },
    { to: "packages", icon: <Phosphor.PiPackage />, text: "Packages" },
    { to: "contact", icon: <Phosphor.PiPhoneCall />, text: "Contact" },
  ];

  return (
    <>
      <header>
        <div className="container">
          <div className="header_main">
            <Link className="logo">
              <img src={themeMode ? Logo : DarkLogo} alt="logo" />
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
            <div className="header_rightside">
              <div className="theme">
                {themeMode ? <Tabler.TbSun /> : <Tabler.TbMoon />}
                <button
                  className={`theme_toggle ${themeMode ? "active" : ""}`}
                  onClick={toggleTheme}
                ></button>
                <span>{themeMode ? "light" : "dark"}</span>
              </div>
            </div>
            <nav className={!isScrollingDown ? "active" : ""}>
              <ul className="menu">
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    to={item.to}
                    icon={item.icon}
                    text={item.text}
                    location={location}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

const MenuItem = ({ to, icon, text, location }) => (
  <li>
    {location.pathname.startsWith("/projects") ? (
      <Link to={`/#${to}`}>
        {icon}
        <span>{text}</span>
      </Link>
    ) : (
      <ScrollLink to={to} duration={500} spy={true} hashSpy={true} smooth={true} offset={1}>
        {icon}
        <span>{text}</span>
      </ScrollLink>
    )}
  </li>
);

export default Header;
