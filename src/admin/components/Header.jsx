import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/images/logo.svg";
import DarkLogo from "../../assets/images/logo-dark.svg";
import * as Tabler from "react-icons/tb";
import * as Phosphor from "react-icons/pi";
import { mode } from "../../redux/slices/ThemeSlice.jsx";

const Header = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(mode());
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", themeMode);
  }, [themeMode]);
  return (
    <header className="admin-header">
      <Link className="logo" to="/">
        <img src={themeMode ? Logo : DarkLogo} alt="logo" />
      </Link>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/dashboard">
              <Tabler.TbDashboard />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Tabler.TbSettings />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Tabler.TbLogout />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
        <div className="theme">
          {themeMode ? <Tabler.TbSun /> : <Tabler.TbMoon />}
          <button
            className={`theme_toggle ${themeMode ? "active" : ""}`}
            onClick={toggleTheme}
          ></button>
          <span>{themeMode ? "light" : "dark"}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
