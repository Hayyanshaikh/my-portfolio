import React from 'react';
// Admin pages
import AdminLayout from '../admin/AdminLayout';
import AdminProfile from '../admin/pages/Profile.jsx';
import AdminExperience from '../admin/pages/Experience.jsx';
import AdminDashboard from '../admin/pages/Dashboard.jsx';
import AdminProjects from '../admin/pages/Projects.jsx';
import AdminAddProject from '../admin/pages/AddProject.jsx';
import AdminPackages from '../admin/pages/Packages.jsx';
import AdminAddPackage from '../admin/pages/AddPackage.jsx';
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
        path: "profile",
        element: <AdminProfile />,
      },
      {
        path: "experience",
        element: <AdminExperience/>,
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
        path: "packages",
        element: <AdminPackages />,
      },
      {
        path: "packages/add",
        element: <AdminAddPackage />,
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