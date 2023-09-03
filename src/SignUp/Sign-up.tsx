import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import tick from "../assets/tick.png";
import { prodUrl } from "../constant";

interface userformData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [userCred, setUserCred] = useState<userformData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserCred((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleClose = () => {
    setShow(false);
    navigate("/login");
  };
  const RegisterUser = async (e: any) => {
    e.preventDefault();
    const userData = {
      name: userCred.name,
      email: userCred.email,
      password: userCred.password,
    };

    try {
      const res = await axios.post(`${prodUrl}/signup`, userData);

      if (res.data) {
        //e.response.data.errors
        setShow(true);
      }
    } catch (e: any) {
      setError(e.response.data.errors);
    }
  };
  return (
    <>
      <div className="main-div-signup">
        {show ? (
          <Modal
            show={true}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            {/* <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header> */}
            <Modal.Body>
              <div className="text-center ">
                <img src={tick} alt="tick" className="tick-img" />
                <h2>Thank you!</h2>
                <p>User Regitser Successfully!....</p>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleClose}
                >
                  OK
                </button>
                {/* <Button  className="btn btn-success" >
                OK
              </Button> */}
              </div>
            </Modal.Body>
          </Modal>
        ) : (
          ""
        )}

        <div className="signup-div">
          <h1>Sign Up</h1>
          <form onSubmit={RegisterUser}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={userCred.name}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={userCred.email}
              required
            />
            {error?.email ? (
              <h4 className="alert-error">{error?.email}</h4>
            ) : (
              ""
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userCred.password}
              onChange={handleChange}
              required
            />
            {error?.password ? (
              <h4 className="alert-error">{error?.password}</h4>
            ) : (
              ""
            )}

            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have Account?<Link to="/login">Login Here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
