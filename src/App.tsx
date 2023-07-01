import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import SignUp from "./SignUp/Sign-up";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/signup" element={<SignUp />}></Route>

          <Route path="/loguut" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
