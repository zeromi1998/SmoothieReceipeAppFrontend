import "./styles.css";
import axios from "axios";
import MyRecipeCard from "../Components/myRecipe-card";
import { useEffect, useState } from "react";
import LoaderComponent from "../Components/Loader-component";

const ViewSmoothie = () => {
  const [smoothies, setSmoothies] = useState([]);

  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const getSmoothies = async () => {
      setLoader(true);
      const userData = JSON.parse(localStorage.getItem("userData")!);

      const headers = {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      };

      const smoothiesData = await axios.get("http://localhost:3000/smoothies", {
        headers,
      });
      if (smoothiesData) {
        setLoader(false);
      }
      setSmoothies(smoothiesData.data);
      console.log("this is smothes data", smoothiesData.data);
      return () => controller.abort();
    };
    getSmoothies();
  }, []);

  return (
    <>
      {loader ? (
        <LoaderComponent />
      ) : (
        <div className="main-view">
          {smoothies.length > 0 ? (
            <MyRecipeCard recipeData={smoothies} />
          ) : (
            <div>
              <h3> No Recipe Found !. Please Create New Recipe </h3>
            </div>
          )}
        </div>
      )}
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
