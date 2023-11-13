import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ element, isAuthenticated, ...rest }) {
  if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}


export default PrivateRoute