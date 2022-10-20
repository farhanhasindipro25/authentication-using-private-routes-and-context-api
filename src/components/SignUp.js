import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  console.log(createUser);

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Registered User:", user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create your account!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <div>
                  <p className="flex items-center">
                    <small>Already have an account?</small>
                    <label className="label">
                      <Link
                        to="/login"
                        className="label-text-alt link link-hover"
                      >
                        Login Here.
                      </Link>
                    </label>
                  </p>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SIGN UP</button>
              </div>
            </form>
            <button onClick={handleGoogleSignIn} className="btn btn-success">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
