import mango from "../assets/Mango.jpg";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import MyRecipeCard from "../Components/myRecipe-card";
const MyRecipes = () => {
  const [myRecipe, setMyRecipe] = useState([]);

  useEffect(() => {
    getMyRecipes();
  }, []);

  const getMyRecipes = async () => {
    const userData = JSON.parse(localStorage.getItem("userData")!);

    const headers = {
      "content-type": "application/json",
      authorization: `Bearer ${userData.token}`,
    };

    const res = await axios.get("http://localhost:3000/smoothie", {
      headers,
    });
    setMyRecipe(res.data);
    console.log("this is my recipes data", res);
  };
  return (
    <>
      <div className="createRecipe">
        <Link to="/createRecipe">Create New Recipe</Link>
      </div>
      <MyRecipeCard recipeData={myRecipe} flag={true}/>
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
