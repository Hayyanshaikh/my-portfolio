import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navigationLinks = [
    // { path: "dashboard", label: "Dashboard" },
    { path: "projects", label: "Projects" },
    { path: "services", label: "Services" },
    { path: "packages", label: "Packages" },
    { path: "prices", label: "Prices" },
    { path: "skills", label: "Skills" },
    { path: "resume", label: "Resume" },
    { path: "experience", label: "Experience" },
    { path: "testimonial", label: "Testimonial" },
    { path: "media", label: "Media" },
    { path: "settings", label: "Settings" },
  ];
  return (
    <aside className="admin-sidebar">
      <ul className="sidebar-menu">
        {navigationLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} aria-label={link.label}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
