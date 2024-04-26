import React from 'react';
// Admin pages
import AdminLayout from '../admin/AdminLayout';
import AdminAbout from '../admin/pages/About.jsx';
import AdminDashboard from '../admin/pages/Dashboard.jsx';
import AdminProjects from '../admin/pages/Projects.jsx';
import AdminAddProject from '../admin/pages/AddProject.jsx';
import AdminServices from '../admin/pages/Services.jsx';
import AdminSkills from '../admin/pages/Skills.jsx';
import AdminSettings from '../admin/pages/Settings.jsx';
import AdminResume from '../admin/pages/Resume.jsx';
import AdminLogin from '../admin/pages/Login.jsx';
import AdminMedia from '../admin/pages/Media.jsx';

// Web pages
import Home from '../website/pages/Home.jsx';
import WebLayout from '../website/WebLayout.jsx';
import Projects from '../website/pages/Projects.jsx';
import ErrorPage from '../website/pages/ErrorPage.jsx';
import SingleProject from '../website/pages/SingleProject.jsx';

const adminRoutes = [
  // Web routes (unchanged)
  {
    path: "/",
    element: <WebLayout />,
    errorElement: <ErrorPage/>,
    children: [{
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectId",
        element: <SingleProject />,
      },
    ],
  },

  // Admin area routes
  {
    path: "/hs-admin",
    element: <AdminLayout />,
    children: [{
        path: "dashboard",
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "about",
        element: <AdminAbout />,
      },
      {
        path: "projects",
        element: <AdminProjects />,
      },
      {
        path: "projects/add",
        element: <AdminAddProject />,
      },
      {
        path: "services",
        element: <AdminServices />,
      },
      {
        path: "skills",
        element: <AdminSkills />,
      },
      {
        path: "resume",
        element: <AdminResume />,
      },
      {
        path: "media",
        element: <AdminMedia />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
      {
        path: "login",
        element: <AdminLogin />,
      },
    ],
  },
];

export default adminRoutes;