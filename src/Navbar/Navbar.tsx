import {  useState } from "react";
import mainImg from "../assets/main.jpg";
import { Link } from "react-router-dom";
import "./styles.css";
import { FaHamburger, FaArrowRight } from "react-icons/fa";
// import { useLocalState } from "../util/useLocalStorage";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [_seed, setSeed] = useState(1);
  const userData = JSON.parse(localStorage.getItem("userData")!);
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const logoutUser = () => {
    navigate("/login");
    localStorage.clear();
    setSeed(Math.random());
  };
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const closeSidenavbar = () => {
    setShowNavbar(false);
  };
  return (
    <>
      <nav className="navbar">
        <img src={mainImg} alt="logo" className="logoImg" />
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaHamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <div className="showback">
            <FaArrowRight onClick={closeSidenavbar} />
          </div>
          <ul className="navbar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            {!userData ? (
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

            {userData ? (
              <>
                <li>
                  <Link to="/myRecipes">My Recipe</Link>
                </li>

                <li>
                  <p style={{cursor:"pointer",color:"#fff"}} onClick={logoutUser} >
                    Logout
                  </p>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
