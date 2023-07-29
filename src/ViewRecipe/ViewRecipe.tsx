import mango from "../assets/Mango.jpg";
import "./styles.css";

const ViewRecipe = () => {
  return (
    <>
      <div className="main-recipe">
        <div className="card-recipe">
          <div>
            <img src={mango} alt="mango" />
            <h1>Mango Shake</h1>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-one">
            <h3>Follow Steps :</h3>
            <ol><li>hello</li><li>hsddds</li><li>dsfdsfds</li><li></li></ol>
            {/* <p>
              1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
              pellentesque tortor. Aenean congue sed metus in iaculis. Cras a
              tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
              purus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
            <p>
              2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
              pellentesque tortor. Aenean congue sed metus in iaculis. Cras a
              tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
              purus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
            <p>
              3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
              pellentesque tortor. Aenean congue sed metus in iaculis. Cras a
              tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
              purus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
            <p>
              4.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
              pellentesque tortor. Aenean congue sed metus in iaculis. Cras a
              tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
              purus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p> */}
          </div>

          <div className="card-two">
            <h1>Ingrediants</h1>
            <ul>
              <li>
                <input
                  className="check-box"
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <p>Milk</p>
              </li>
              <li>
                <input
                  className="check-box"
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <p>Bowl</p>
              </li>
              <li>
                <input
                  className="check-box"
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <p>Sugar</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRecipe;
