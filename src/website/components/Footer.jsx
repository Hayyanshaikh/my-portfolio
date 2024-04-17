import React from 'react'
import { Link } from "react-router-dom";
import * as Phosphor from "react-icons/pi";
import Logo from "../../assets/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import DarkLogo from "../../assets/images/logo-dark.svg";
import { mode } from "../../redux/slices/ThemeSlice.jsx";

const Footer = () => {
	const themeMode = useSelector((state) => state.theme.mode);
	return (
		<footer>
			<div className="container">
				<div className="footer_wrapper">
					<div className="footer_column">
						<Link className="logo">
	            <img src={themeMode ? Logo : DarkLogo} alt="logo" />
	          </Link>
					</div>
          <div className="footer_column">
          	<h4 className="footer_heading">Quick Link</h4>
          	<ul className="footer_list">
				      <li>
				        <Link to="/service">
				        	<Phosphor.PiCaretDoubleRight/>
				        	<p>Service</p>
				        </Link>
				      </li>
				      <li>
				        <Link to="/projects">
				        	<Phosphor.PiCaretDoubleRight/>
				        	<p>Projects</p>
				        </Link>
				      </li>
				      <li>
				        <Link to="/pricing">
				        	<Phosphor.PiCaretDoubleRight/>
				        	<p>Pricing</p>
				        </Link>
				      </li>
				      <li>
				        <Link to="/raqs">
				        	<Phosphor.PiCaretDoubleRight/>
				        	<p>Faq's</p>
				        </Link>
				      </li>
				      <li>
				        <Link to="/contact">
				        	<Phosphor.PiCaretDoubleRight/>
				        	<p>Contact</p>
				        </Link>
				      </li>
				    </ul>
          </div>
          <div className="footer_column">
					  <h4 className="footer_heading">Our Work</h4>
					  <ul className="footer_list">
					    <li>
					      <Link to="/website-mockup-design">
					        <figure className="footer_figure">
					          <img src="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg" alt="Website Mockup Design" />
					          <figcaption>Website Mockup Design</figcaption>
					        </figure>
					      </Link>
					    </li>
					    <li>
					      <Link to="/mobile-app-design">
					        <figure className="footer_figure">
					          <img src="https://cdn.dribbble.com/userupload/3246132/file/original-d17aaff41fec3353fe80fc8f7372253e.png" alt="Mobile App Design" />
					          <figcaption>Mobile App Design</figcaption>
					        </figure>
					      </Link>
					    </li>
					  </ul>
					</div>
          <div className="footer_column">
          	<h4 className="footer_heading">Address</h4>
          	<ul className="footer_list">
				      <li>
				        <Phosphor.PiHouse />
				        <p>55 Main Street, 2nd block, New York City</p>
				      </li>
				      <li>
				        <Phosphor.PiEnvelope />
				        <p>support@gmail.com</p>
				      </li>
				      <li>
				        <Phosphor.PiPhone />
				        <p>+880 (123) 456 88</p>
				      </li>
				    </ul>
          </div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;