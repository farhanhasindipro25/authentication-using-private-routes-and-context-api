import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-10">
        Welcome to your dashboard,
        <span className="text-amber-400">{user?.displayName}</span>
      </h2>
    </div>
  );
};

export default Home;
