import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import SignUp from "./SignUp/Sign-up";
import ViewSmoothie from "./ViewSmoothie/View-Smoothie";
import ViewRecipe from "./ViewRecipe/ViewRecipe";
import MyRecipes from "./MyRecipes/MyRecipes"
import CreateRecipe from "./CreateRecipe/CreateRecipe"
function App() {
  return (
    <div className="app-div">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/smoothies" element={<ViewSmoothie />}></Route>
          <Route path="/myRecipes" element={<MyRecipes />}></Route>
          <Route path="/viewrecipe" element={<ViewRecipe />}></Route>
          <Route path="/createRecipe" element={<CreateRecipe />}></Route>


          <Route path="/logout" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
