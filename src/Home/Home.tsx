import React from "react";
import "./styles.css";
import smoothie from "../assets/smoothie.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData")!);

  const checkAuth = () => {
    if (userData?.token) {
      navigate("/smoothies");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="grid-container">
        {/* <div className="item-grid"> */}
        <img src={smoothie} alt="Smoothie_img" />
        {/* </div> */}
        <div className="item-grid">
          <h1>Smoothie Recipes</h1>

          <button onClick={checkAuth} className="button-29" role="button">
            View Recipes
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
