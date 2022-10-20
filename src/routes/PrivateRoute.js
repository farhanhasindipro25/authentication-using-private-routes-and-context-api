import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user && user.uid) {
    return children;
  }
  if (loading) {
    return <div className="text-lg mt-20 text-center font-bold">Loading</div>;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
