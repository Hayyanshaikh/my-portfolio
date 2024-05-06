import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Tabler from "react-icons/tb";
import Logo from "../../assets/images/logo.svg";
import DarkLogo from "../../assets/images/logo-dark.svg";
import { useDispatch, useSelector } from "react-redux";
import Input from '../../website/components/Input.jsx';
import Button from '../../website/components/Button.jsx';
import { signInAsync } from "../../redux/actions/authAction.jsx";
import { selectError, selectIsLoading } from "../../redux/slices/authSlice.jsx";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    dispatch(signInAsync(email, password));
  };

  return (
    <div className="login_form">
      <Link className="logo" to="/">
        <img src={themeMode ? Logo : DarkLogo} alt="logo" />
      </Link>

      <div className="loginForm">
        <h2>Register</h2>
        <form className="contact_form" onSubmit={handleSignIn}>
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
          <Input
            icon={<Tabler.TbKey />}
            label="Password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            valid={error === null ? "" : "Invalid Password"}
          />
          <Input
            icon={<Tabler.TbKey />}
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            valid={error === null ? "" : "Passwords do not match"}
          />
          <Button className="btn" disabled={loading}>
            <span>{loading ? "Loading..." : "Login"}</span>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;