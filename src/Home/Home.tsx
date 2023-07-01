import React from "react";
import "./styles.css";
import smoothie from "../assets/smoothie.jpg";
const Home = () => {
  return (
    <>

      <div className="grid-container">
        {/* <div className="item-grid"> */}
          <img src={smoothie} alt="Smoothie_img" />
        {/* </div> */}
        <div className="item-grid">
          <h1>Smoothie Recipes</h1>

          
          <button className="button-29" role="button">View Recipes</button>
        </div>
      </div>
    </>
  );
};

export default Home;
