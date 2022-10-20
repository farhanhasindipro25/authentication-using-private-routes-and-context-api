import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("Context:", user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content flex justify-around">
        <div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            XYZ
          </Link>
          <Link className="btn btn-ghost normal-case text-lg" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-lg" to="/orders">
            Orders
          </Link>
        </div>
        <div>
          {user?.displayName && (
            <p className="text-lg font-bold">Welcome, {user.displayName}</p>
          )}
          {user?.email ? (
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          ) : (
            <div>
              <Link className="btn btn-ghost normal-case text-lg" to="/login">
                Log In
              </Link>
              <Link className="btn btn-ghost normal-case text-lg" to="/signup">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
