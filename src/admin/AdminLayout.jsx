import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import AdminLogin from './pages/Login.jsx';
import { useDispatch, useSelector } from "react-redux";
import { checkSignInStatusAsync } from "../redux/actions/authAction.jsx";
import { selectUser, selectIsAuthenticated } from "../redux/slices/authSlice.jsx";
import { Outlet, useNavigate, useLocation, ScrollRestoration } from 'react-router-dom';
import { mode } from "../redux/slices/ThemeSlice.jsx";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const IsAuthenticated = useSelector(selectIsAuthenticated);
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    dispatch(checkSignInStatusAsync());
  }, [dispatch]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", themeMode);
  }, [themeMode]);

  // useEffect(() => {
  //   if (!IsAuthenticated) {
  //     navigate("login");
  //   }
  //   else{
  //     navigate("dashboard");
  //   }
  // }, [IsAuthenticated, navigate]);

  return (
    <div className="admin-layout">
     	{
        IsAuthenticated ? (
          <>
            <Header/>
            <main className="admin-main">
              <Sidebar/>
              <section className="admin-content">
                <Outlet />
              </section>
            </main>
            <Footer/>
            <ScrollRestoration />
          </>
        ) : <AdminLogin />
      }
    </div>
  );
};

export default AdminLayout;
