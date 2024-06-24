import React, { useState, useEffect } from "react";
import * as Tabler from "react-icons/tb";
import * as Phosphor from "react-icons/pi";
import Logo from "../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DarkLogo from "../../assets/images/logo-dark.svg";
import { mode } from "../../redux/slices/ThemeSlice.jsx";
import { signOutAsync } from "../../redux/actions/authAction.jsx";
import { selectIsAuthenticated } from "../../redux/slices/authSlice.jsx";
import { selectUser, selectLoading } from "../../redux/slices/userSlice.jsx";
import { getUserAsync, updateUserAsync } from "../../redux/actions/userAction.jsx";

const Header = () => {
  const dispatch = useDispatch();  
  const IsAuthenticated = useSelector(selectIsAuthenticated);
  const themeMode = useSelector((state) => state.theme.mode);
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getUserAsync());
  }, [])

  const toggleTheme = () => {
    dispatch(mode());
  };

  const handleSignout = () => {
    dispatch(signOutAsync());
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
          {
            IsAuthenticated ? (
              <>
                <li>
                  <NavLink to="/hs-admin/profile">
                    <img src={user[0] && user[0].imageUrl} alt="profile image"/>
                    <span>My Profile</span>
                  </NavLink>
                </li>
                <li>
                  <button to="/hs-admin/login" onClick={handleSignout}>
                    <Tabler.TbLogout />
                    <span>Logout</span>
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/hs-admin/login" onClick={handleSignout}>
                  <Tabler.TbLogin />
                  <span>Login</span>
                </NavLink>
              </li>
            )
          }

          <li>
            <NavLink to="/hs-admin/settings">
              <Tabler.TbSettings />
              <span>Settings</span>
            </NavLink>
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
