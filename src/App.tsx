import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import SignUp from "./SignUp/Sign-up";
import ViewSmoothie from "./ViewSmoothie/View-Smoothie";
import ViewRecipe from "./ViewRecipe/ViewRecipe";
import MyRecipes from "./MyRecipes/MyRecipes";
import CreateRecipe from "./CreateRecipe/CreateRecipe";
import { useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
function App() {
  const userData = JSON.parse(localStorage.getItem("userData")!);
  // const isLoggedIn: boolean =
  //   JSON.parse(localStorage.getItem("userData")!) !== null;


  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem("logged_user") !== null
  );

  // useEffect(() => {
  //   localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
  // }, [isLoggedIn]);

  return (
    <div className="app-div">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/signup" element={<SignUp />}></Route>

          <Route
            path="/smoothies"
            element={
              <PrivateRoute>
                <ViewSmoothie />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/myRecipes"
            element={
              <PrivateRoute>
                <MyRecipes />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/viewrecipe"
            element={
              <PrivateRoute>
                <ViewRecipe />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/createRecipe"
            element={
              <PrivateRoute>
                <CreateRecipe />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/editRecipe"
            element={
              <PrivateRoute>
                <CreateRecipe />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
