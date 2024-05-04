import React from "react";
import * as Tabler from "react-icons/tb";
import Button from '../../website/components/Button.jsx';
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="loginForm">
			<h2>Login</h2>
			<form className="contact_form">
			  <div className="input_group">
			    <label htmlFor="email">Email</label>
			    <input type="email" id="email" name="email" placeholder="Enter your Email" />
			    <Tabler.TbUser />
			  </div>
			  <div className="input_group">
			    <label htmlFor="Password">
			    	Password
			    	<Link>Forgot Password?</Link>
			    </label>
			    <input type="password" id="Password" name="Password" placeholder="Enter your Password" />
			    <Tabler.TbKey />
			  </div>
			  <Button type="submit" className="btn">
			    <span>Login</span>
			  </Button>
			</form>
		</div>
	)
}

export default Login;