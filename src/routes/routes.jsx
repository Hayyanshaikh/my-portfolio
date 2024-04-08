import React from 'react';
// admin pages
import AdminLayout from '../admin/AdminLayout';

// web pages
import WebLayout from '../website/WebLayout.jsx';
import Home from '../website/pages/Home.jsx'

const adminRoutes = [
  {
    path: "/",
    element: <WebLayout />,
    children:[
      {
        index: true,
        element: <Home />,
      }
    ]
  },
  {
    path: "/hs-admin",
    element: <AdminLayout />,
  }
];

export default adminRoutes;
