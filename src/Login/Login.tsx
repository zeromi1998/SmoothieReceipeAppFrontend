import react, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

interface userLoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [userData, setUserData] = useState<userLoginData>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="login-div">
          <h1>Login</h1>
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            required
          />
          <input
            type="password"
            onChange={handleChange}
            placeholder="Password"
            name="password"
            value={userData.password}
            required
          />
          <button type="submit">Sign In</button>
          <p>
            Don't have Account?<Link to="/signup">Create Account</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
