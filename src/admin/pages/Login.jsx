import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Tabler from "react-icons/tb";
import Logo from "../../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import Input from '../../website/components/Input.jsx';
import { mode } from "../../redux/slices/ThemeSlice.jsx";
import DarkLogo from "../../assets/images/logo-dark.svg";
import Button from '../../website/components/Button.jsx';
import { selectError, selectIsLoading } from "../../redux/slices/authSlice.jsx";
import { signInAsync, checkSignInStatusAsync } from "../../redux/actions/authAction.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    dispatch(checkSignInStatusAsync());
  }, [])

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signInAsync(email, password));
  };

  return (
    <div className="login_form">
      
      <Link className="logo" to="/">
        <img src={themeMode ? Logo : DarkLogo} alt="logo" />
      </Link>

      <div className="loginForm">
        <h2>Login</h2>
        <form className="contact_form" onSubmit={handleSignIn}>
          <Input
            icon={<Tabler.TbUser />}
            label="Email"
            id="loginEmail"
            name="loginEmail"
            required={true}
            type="email"
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
          <Link to="/hs-admin/forgot">Forgot Password?</Link>
          <Button className="btn" disabled={loading}>
            <span>{loading ? "Loading..." : "Login"}</span>
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login;