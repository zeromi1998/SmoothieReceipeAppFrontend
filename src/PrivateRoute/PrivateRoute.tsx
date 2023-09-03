import { Navigate } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";

const PrivateRoute = ({ children }: any) => {
  const [jwt, _setJwt] = useLocalState("", "jwt");
  return jwt ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
