import React from "react";
import "./styles.css";
import smoothie from "../assets/smoothie.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>

      <div className="grid-container">
        {/* <div className="item-grid"> */}
          <img src={smoothie} alt="Smoothie_img" />
        {/* </div> */}
        <div className="item-grid">
          <h1>Smoothie Recipes</h1>

          
          <Link to="/smoothies" className="button-29" role="button">View Recipes</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
