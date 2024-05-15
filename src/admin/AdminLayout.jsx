import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import AdminLogin from './pages/Login.jsx';
import { useDispatch, useSelector } from "react-redux";
import { checkSignInStatusAsync } from "../redux/actions/authAction.jsx";
import { selectIsAuthenticated } from "../redux/slices/authSlice.jsx";
import { Outlet, useNavigate, ScrollRestoration } from 'react-router-dom';
import { mode } from "../redux/slices/ThemeSlice.jsx";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    dispatch(checkSignInStatusAsync());
  }, [dispatch]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", themeMode);
  }, [themeMode]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("login");
    }
    else{
      navigate("profile");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="admin-layout">
      {isAuthenticated ? (
        <>
          <Header />
          <main className="admin-main">
            <Sidebar />
            <section className="admin-content">
              <Outlet />
            </section>
          </main>
          <Footer />
          <ScrollRestoration />
        </>
      ) : <Outlet />}
    </div>
  );
};

export default AdminLayout;