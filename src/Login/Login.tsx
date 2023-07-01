import react from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Login = () => {
  return (
    <>
      <div className="main-div">
        <div className="login-div">
          <h1>Login</h1>
          <input type="email" placeholder="Email" name="email" required  />
          <input type="password" placeholder="Password" name="password" required />
          <button type="submit">Sign In</button>
          <p>Don't have Account?<Link to="/signup">Create Account</Link></p>
        </div>
      </div>
    </>
  );
};

export default Login;
