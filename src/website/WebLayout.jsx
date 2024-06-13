import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './sections/ContactForm.jsx';
import { mode as toggleThemeMode } from '../redux/slices/ThemeSlice.jsx';
import { selectSettings } from '../redux/slices/settingSlice.jsx';
import { getSettingsAsync } from '../redux/actions/settingAction.jsx';

const WebLayout = () => {
  const [loading, setLoading] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [previousPosition, setPreviousPosition] = useState(0);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const settings = useSelector(selectSettings);
  const setting = settings && settings[0];

  useEffect(() => {
    dispatch(getSettingsAsync());

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    dispatch(toggleThemeMode());
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsScrollingDown(currentPosition > previousPosition);
      setPreviousPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [previousPosition]);

  return (
    <>
      {loading ? (
        <div className="loading-spinner">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <Header toggleTheme={toggleTheme} themeMode={themeMode} />
          <Outlet />
          <ContactForm />
          <Footer />
          <ScrollRestoration />
        </>
      )}
    </>
  );
};

export default WebLayout;