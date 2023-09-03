import React from "react";

import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { prodUrl } from "../constant";
import sample from "../assets/sample.jpg";

const MyRecipeCard = ({ recipeData, flag, getSmoothie }: any) => {
  const deleteSmoothie = async (data: any) => {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    // e.preventDefault();

    const headers = {
      "content-type": "application/json",
      authorization: `Bearer ${userData.token}`,
    };
    const res = await axios.delete(`${prodUrl}/smoothie/${data._id}`, {
      headers,
    });
    getSmoothie();
  };
  return (
    <>
      <div className="myRecipes">
        {recipeData.map((data: any) => {
          return (
            <div key={uuidv4()}>
              <div className="recipe-card">
                <img
                  src={data.smoothieImg ? data.smoothieImg : sample}
                  alt="mango"
                />

                <div className="flex-card">
                  <h3>{data.name}</h3>
                  <Link state={data} to="/viewrecipe">
                    See Full Recipe
                  </Link>
                </div>
              </div>
              {flag ? (
                <>
                  <Link to="/editRecipe" state={data} className="edit">
                    <FaEdit className="edit-icon" />
                  </Link>
                  <button
                    onClick={() => deleteSmoothie(data)}
                    className="delete"
                  >
                    <AiFillDelete className="delete-icon" />
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyRecipeCard;
