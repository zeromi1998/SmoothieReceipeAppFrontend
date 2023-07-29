import react, { useState } from "react";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="main-div-signup">
        <div className="signup-div">
          <h1>Sign Up</h1>
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
          <p>
            Already have Account?<Link to="/login">Login Here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
