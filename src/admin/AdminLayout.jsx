import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;
  
  useEffect(() => {
    if (currentUrl === "/hs-admin") {
      navigate("dashboard");
    }
  }, []);

  return (
    <div className="admin-layout">
     	<Header/>
      <main className="admin-main">
        <Sidebar/>
        <section className="admin-content">
          <Outlet />
        </section>
      </main>
     	<Footer/>
    </div>
  );
};

export default AdminLayout;
