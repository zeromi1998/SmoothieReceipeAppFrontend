import react, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useLocalState } from "../util/useLocalStorage";
import { prodUrl } from "../constant";

interface userLoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const navigate = useNavigate();

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState<userLoginData>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const submitLoginData = async (e: any) => {
    let loginData = {
      email: userData.email,
      password: userData.password,
    };
    e.preventDefault();
    try {
      const res = await axios.post(`${prodUrl}/login`, loginData);

      localStorage.setItem("userData", JSON.stringify(res.data));
      // localStorage.setItem("jwt", JSON.stringify(res.data.token));
      setJwt(res.data.token);
      if (res.data) {
        navigate("/smoothies");
      }
    } catch (e: any) {
      console.log("Login  error response", e.response.data.errors);
      setError(e.response.data.errors);
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="login-div">
          <h1>Login</h1>
          <form onSubmit={submitLoginData}>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              required
            />
            {error?.email ? (
              <h4 className="alert-error">{error?.email}</h4>
            ) : (
              ""
            )}

            <input
              type="password"
              onChange={handleChange}
              placeholder="Password"
              name="password"
              value={userData.password}
              required
            />

            {error?.password ? (
              <h4 className="alert-error">{error?.password}</h4>
            ) : (
              ""
            )}

            <button type="submit">Sign In</button>
          </form>
          <p>
            Don't have Account?<Link to="/signup">Create Account</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
