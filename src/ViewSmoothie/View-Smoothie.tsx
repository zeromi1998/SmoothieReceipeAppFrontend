import "./styles.css";
import { Link } from "react-router-dom";

import mango from "../assets/Mango.jpg";
const ViewSmoothie = () => {
  return (
    <>
      <div className="main-block">
        {/* <h1>Smoothies</h1> */}
        <div className="card">
          <img src={mango} alt="mango" />
          <h3>Smoothies</h3>
          <Link className="btn" to="/viewrecipe">View Recipe</Link>
        </div>
        <div className="card">
          <img src={mango} alt="mango" />

          <h3>Smoothies</h3>
          <Link className="btn" to="/viewrecipe">View Recipe</Link>
        </div>
        <div className="card">
          <img src={mango} alt="mango" />

          <h3>Smoothies</h3>
          <Link className="btn" to="/viewrecipe">View Recipe</Link>
        </div>
      </div>
    </>
  );
};

export default ViewSmoothie;
