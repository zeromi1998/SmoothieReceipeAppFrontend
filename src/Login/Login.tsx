import react, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

  const submitLoginData = async (e: any) => {
    let loginData = {
      email: userData.email,
      password: userData.password,
    };
    e.preventDefault();
    // console.log("this is login data", loginData);
    const res = await axios.post("http://localhost:3000/login", loginData);

    localStorage.setItem("userData",JSON.stringify(res.data))
    console.log("this is log response", res);


  };

  return (
    <>
      <div className="main-div">
        <div className="login-div">
          <h1>Login</h1>
          <form onSubmit={submitLoginData}>
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
          </form>
          <p>
            Don't have Account?<Link to="/signup">Create Account</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
