import mango from "../assets/Mango.jpg";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import sample from "../assets/sample.jpg";
import { prodUrl } from "../constant";

const ViewRecipe = () => {
  const location = useLocation();

  const propsData = location.state;

  const ingrediantsData = propsData.ingredients.split(",");


  function createMarkup() {
    return { __html: propsData.description };
  }
  return (
    <>
      <div className="main-recipe">
        <div className="card-recipe">
          <div>
            <img
              src={propsData.smoothieImg ? propsData.smoothieImg : sample}
              alt="mango"
            />
            <h1>{propsData.name}</h1>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-one">
            <h3>Follow Steps :</h3>
            {/* {propsData.description} */}
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>

          <div className="card-two">
            <h1>Ingrediants</h1>
            <ul>
              {ingrediantsData.map((data: any, index: number) => {
                return (
                  <li key={index}>
                    <input className="check-box" type="checkbox" />
                    <p>{data}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRecipe;
