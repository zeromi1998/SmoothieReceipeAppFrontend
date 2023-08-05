import React from "react";

import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
const MyRecipeCard = ({ recipeData, flag }: any) => {
  return (
    <>
      <div className="myRecipes">
        {recipeData.map((data: any) => {
          return (
            <div key={uuidv4()}>
              <div className="recipe-card">
                <img src={data.smoothieImg} alt="mango" />

                <div className="flex-card">
                  <h3>{data.name}</h3>
                  <Link state={data} to="/viewrecipe">See Full Recipe</Link>
                </div>
              </div>
              {flag ? (
                <>
                  <button className="edit">
                    <FaEdit className="edit-icon" />
                  </button>
                  <button className="delete">
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
