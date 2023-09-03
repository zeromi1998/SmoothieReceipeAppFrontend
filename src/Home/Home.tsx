import React from "react";
import "./styles.css";
import smoothie from "../assets/smoothie.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Carousel from "nuka-carousel";
import { prodUrl } from "../constant";
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
  const sliderImg = [
    "https://res.cloudinary.com/ddhlxd7eq/image/upload/v1693672441/nzdavaxheyibwpysdktq.jpg",
    "https://res.cloudinary.com/ddhlxd7eq/image/upload/v1692257359/c60mpex4fbgtc5yvco2e.jpg",
  ];
  return (
    // <>
    //   <div className="grid-container">
    //     {/* <div className="item-grid"> */}
    //     <img src={smoothie} alt="Smoothie_img" />
    //     {/* </div> */}
    //     <div className="item-grid">
    //       <h1>Smoothie Recipes</h1>

    //       <button onClick={checkAuth} className="button-29" role="button">
    //         View Recipes
    //       </button>
    //     </div>
    //   </div>
    // </>
    <>
      <Carousel
        autoplay={true}
        autoplayInterval={3000}
        withoutControls={true}
        wrapAround={true}
        pauseOnHover={false}
      >
        {sliderImg.map((data, i) => {
          return (
            <div className="container">
              <img src={data} alt="Snow" />

              <div className="centered">
                <h1> Discvoer Simple , Delicious ,</h1>
              
                <h1 className="span-h1">Fast Smoothie Recipes</h1>

                <button onClick={checkAuth} className="button-29" role="button">
                  View Recipes
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Home;
