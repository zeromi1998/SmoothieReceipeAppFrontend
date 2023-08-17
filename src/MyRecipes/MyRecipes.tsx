import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MyRecipeCard from "../Components/myRecipe-card";
import LoaderComponent from "../Components/Loader-component";

const MyRecipes = () => {
  const [myRecipe, setMyRecipe] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getMyRecipes();
  }, []);

  const getMyRecipes = async () => {
    setLoader(true);
    const userData = JSON.parse(localStorage.getItem("userData")!);

    const headers = {
      "content-type": "application/json",
      authorization: `Bearer ${userData.token}`,
    };

    const res = await axios.get("http://localhost:3000/smoothie", {
      headers,
    });
    if (res) {
      setLoader(false);
      setMyRecipe(res.data);
    }
  };

  return (
    <>
      <div className="createRecipe">
        <Link to="/createRecipe">Create New Recipe</Link>
      </div>
      {loader ? (
        <LoaderComponent />
      ) : (
        <>
          {myRecipe.length > 0 ? (
            <MyRecipeCard
              recipeData={myRecipe}
              getSmoothie={getMyRecipes}
              flag={true}
            />
          ) : (
            <div>
              <h3>No Recipe Found !. Please Create New Recipe </h3>
            </div>
          )}
        </>
      )}

      {/* <div className="myRecipes">
        {myRecipe.map((data:any) => {
          return (
            <div>
              <div className="recipe-card">
                <img src={data.smoothieImg} alt="mango" />

                <div className="flex-card">
                  <h3>{data.name}</h3>
                  <Link to="/viewrecipe">See Full Recipe</Link>
                </div>
              </div>
              <button className="edit">
                <FaEdit className="edit-icon" />
              </button>
              <button className="delete">
                <AiFillDelete className="delete-icon" />
              </button>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default MyRecipes;
