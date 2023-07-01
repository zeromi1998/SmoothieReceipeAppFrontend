import react from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const SignUp = () => {
  return (
    <>
      <div className="main-div-signup">
        <div className="signup-div">
          <h1>Sign Up</h1>
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
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
