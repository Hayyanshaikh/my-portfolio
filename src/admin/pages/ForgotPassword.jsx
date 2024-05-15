import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Tabler from "react-icons/tb";
import Logo from "../../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import Input from '../../website/components/Input.jsx';
import DarkLogo from "../../assets/images/logo-dark.svg";
import Button from '../../website/components/Button.jsx';
import { forgotPasswordAsync } from "../../redux/actions/authAction.jsx";
import { selectError, selectIsLoading } from "../../redux/slices/authSlice.jsx";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(forgotPasswordAsync(email));
    console.log('send email');
  };

  return (
    <div className="login_form">
      <Link className="logo" to="/">
        <img src={themeMode ? Logo : DarkLogo} alt="logo" />
      </Link>

      <div className="loginForm">
        <h2>Forgot Password</h2>
        <form className="contact_form" onSubmit={handleForgotPassword}>
          <Input
            icon={<Tabler.TbUser />}
            label="Email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            valid={error === null ? "" : "Invalid email"}
          />
          <Link to="/hs-admin/login">Login?</Link>
          <Button className="btn" disabled={loading}>
            <span>{loading ? "Loading..." : "Submit"}</span>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;