import React from "react";
import mainImg from "../assets/main.jpg"
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={mainImg} alt="logo" className="logoImg"/>
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
            <Link to="/myRecipes">My Recipe</Link>
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
