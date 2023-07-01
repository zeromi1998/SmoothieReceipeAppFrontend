import React from "react";

import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          Smoothie
          <h2></h2>
        </div>
        <ul className="navbar-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
