import react, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./styles.css";

interface userformData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [userCred, setUserCred] = useState<userformData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserCred((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const RegisterUser = (e: any) => {
    const userData = {
      name: userCred.name,
      email: userCred.email,
      password: userCred.password,
    };
    console.log("this reg data", userData);
    axios.post("http://localhost:3000/signup", userData).then((res) => {
      console.log("this is log response", res);
    });
    e.preventDefault();
  };
  return (
    <>
      <div className="main-div-signup">
        <div className="signup-div">
          <h1>Sign Up</h1>
          <form onSubmit={RegisterUser}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={userCred.name}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={userCred.email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userCred.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have Account?<Link to="/login">Login Here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
