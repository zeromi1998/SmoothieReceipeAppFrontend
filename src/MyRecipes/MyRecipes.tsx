import mango from "../assets/Mango.jpg";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const MyRecipes = () => {
  return (
    <>
      <div className="createRecipe">
        <Link to="/createRecipe">Create New Recipe</Link>
      </div>
      <div className="myRecipes">
        <div>
          <div className="recipe-card">
            <img src={mango} alt="mango" />

            <div className="flex-card">
              <h3>Mango Shake</h3>
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
        <div className="recipe-card">
          <img src={mango} alt="mango" />
          <div className="flex-card">
            <h3>Mango Shake</h3>
            <Link to="/viewrecipe">See Full Recipe</Link>
          </div>
        </div>
        <div className="recipe-card">
          <img src={mango} alt="mango" />
          <div className="flex-card">
            <h3>Mango Shake</h3>
            <Link to="/viewrecipe">See Full Recipe</Link>
          </div>
        </div>
        <div className="recipe-card">
          <img src={mango} alt="mango" />
          <div className="flex-card">
            <h3>Mango Shake</h3>
            <Link to="/viewrecipe">See Full Recipe</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRecipes;
