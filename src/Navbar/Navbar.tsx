import  { useState } from "react";
import mainImg from "../assets/main.jpg";
import { Link } from "react-router-dom";
import "./styles.css";
import { FaHamburger, FaArrowRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const userData = JSON.parse(localStorage.getItem("userData")!);
  // const _navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const logoutUser = () => {
    localStorage.clear();
    // navigate("/signup");
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
