import React from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './sections/ContactForm.jsx';

const WebLayout = () => {
	return (
		<>
			<Header/>
			<Outlet/>
			<ContactForm/>
			<Footer/>
			<ScrollRestoration />
		</>
	)
}

export default WebLayout;