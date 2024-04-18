import React from 'react';
// admin pages
import AdminLayout from '../admin/AdminLayout';

// web pages
import Home from '../website/pages/Home.jsx';
import About from '../website/pages/About.jsx';
import WebLayout from '../website/WebLayout.jsx';
import Projects from '../website/pages/Projects.jsx';
import SingleProject from '../website/pages/SingleProject.jsx';

const adminRoutes = [
  {
    path: "/",
    element: <WebLayout />,
    children:[
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectId",
        element: <SingleProject />,
      }
    ]
  },
  {
    path: "/hs-admin",
    element: <AdminLayout />,
  }
];

export default adminRoutes;
