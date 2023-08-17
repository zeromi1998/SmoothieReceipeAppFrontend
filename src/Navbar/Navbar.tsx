import React from "react";
import mainImg from "../assets/main.jpg";
import { Link } from "react-router-dom";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const userData = JSON.parse(localStorage.getItem("userData")!);
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.clear();
    // navigate("/signup");
  };
  return (
    <>
      <nav className="navbar">
        <img src={mainImg} alt="logo" className="logoImg" />
        <ul className="navbar-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!userData?.token ? (
            <>
              <li>
                <Link to="/login">LogIn</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </>
          ) : (
            ""
          )}

          {userData?.token ? (
            <>
              <li>
                <Link to="/myRecipes">My Recipe</Link>
              </li>

              <li>
                <Link onClick={logoutUser} to="/login">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
