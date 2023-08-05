import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import MyRecipeCard from "../Components/myRecipe-card";
import mango from "../assets/Mango.jpg";
import { useEffect, useState } from "react";

const ViewSmoothie = () => {
  const [smoothies, setSmoothies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const getSmoothies = async () => {
      const userData = JSON.parse(localStorage.getItem("userData")!);

      const headers = {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      };

      const smoothiesData = await axios.get("http://localhost:3000/smoothies", {
        headers,
      });
      setSmoothies(smoothiesData.data);
      console.log("this is smothes data", smoothiesData.data);
      return () => controller.abort();
    };
    getSmoothies();
  }, []);

  return (
    <>
    <MyRecipeCard recipeData ={smoothies}/>

    </>
  );
};

export default ViewSmoothie;



// {/* <div className="main-block">
// {/* <h1>Smoothies</h1> */}
// {smoothies.map((data: any) => {
//   return (
//     <div className="card">
//       <img src={data.smoothieImg} alt="mango" />
//       <h3>{data.name}</h3>
//       <Link state={data} className="btn" to="/viewrecipe">
//         View Recipe
//       </Link>
//     </div>
//   );
// })}
// </div> */}