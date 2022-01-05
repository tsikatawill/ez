import React from "react";
import Logo from "../images/logo.png";
import Stylesheet from "./Signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const changeDOMTitle = () => {
    document.title = "Create an account";
  };
  React.useEffect(changeDOMTitle, []);
  const [valid, setValid] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");
  const [showLogin, setShowLogin] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const formValidation = () => {
    if (
      email &&
      age &&
      username &&
      password1 &&
      password2 &&
      password1 === password2
    ) {
      alert(`Account successfuly created for ${username}`);
      setValid(true);
      setShowLogin(true);
    } else if (password1 !== password2) {
      alert("Your passwords don't match");
    } else {
      alert("Please complete the form with the appropriate details");
      // setValid(false);
    }
  };

  return (
    <>
      <div className={`row align-items-center ${Stylesheet.wrapper}`}>
        {showLogin ? (
          <Link
            to="/login"
            className="btn btn-rounded bg--primary"
            style={{ width: "fit-content", margin: "0 auto" }}
          >
            Login
          </Link>
        ) : (
          <>
            <div
              className={`col-md-6 px-3 text-center bg--dark h-100 d-flex align-items-center justify-content-center`}
            >
              <div className="section-header">
                <img className="mb-4" src={Logo} alt={Logo} />
                <h1>Create a free account now</h1>
                <p>
                  At EZ Contacts, we give users the ability to effortlessly
                  create and manage an online address book that can be accessed
                  anywhere on any device over an internet connection.
                </p>
              </div>
            </div>
            <div className={`py-4 py-md-0 col-md-6`}>
              <div className="section-header text-center">
                <h2>Create an account</h2>
              </div>
              <form
                className="form px-3 px-md-0"
                style={{ maxWidth: "500px", width: "100%", margin: "0 auto" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  formValidation();
                }}
              >
                <div className="row">
                  <div className="form--group">
                    <label htmlFor="email" className="form_label mb-1">
                      Email
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                        required
                        id="email"
                        placeholder="Enter your email"
                        aria-label="email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="form--group col-md-7">
                    <label htmlFor="username" className="form_label mb-1">
                      Username
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                      <input
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        required
                        id="username"
                        placeholder="Enter your username"
                        aria-label="username"
                        name="username"
                      />
                    </div>
                  </div>
                  <div className="form--group col-md-5">
                    <label htmlFor="age" className="form_label mb-1">
                      Age
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fas fa-user-plus"></i>
                      </span>
                      <input
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                        type="number"
                        className="form-control"
                        required
                        id="age"
                        placeholder="Enter your age"
                        aria-label="age"
                        name="age"
                      />
                    </div>
                  </div>
                  <div className="form--group col-md-6">
                    <label htmlFor="password1" className="form_label mb-1">
                      Password
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fas fa-lock"></i>
                      </span>
                      <input
                        onChange={(e) => {
                          setPassword1(e.target.value);
                        }}
                        type="password"
                        className="form-control"
                        required
                        id="password1"
                        placeholder="Choose a password"
                        aria-label="password1"
                        name="password1"
                      />
                    </div>
                  </div>
                  <div className="form--group col-md-6">
                    <label htmlFor="password2" className="form_label mb-1">
                      Confirm password
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fas fa-lock"></i>
                      </span>
                      <input
                        onChange={(e) => {
                          setPassword2(e.target.value);
                        }}
                        type="password"
                        className="form-control"
                        required
                        id="password2"
                        placeholder="Confirm password"
                        aria-label="password2"
                        name="password2"
                      />
                    </div>
                  </div>
                </div>
                <div className="cta text-center mt-4">
                  {valid ? (
                    <button
                      type="submit"
                      className="btn bg--primary btn-rounded"
                    >
                      Create account
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn bg-secondary text-light btn-rounded"
                      onClick={formValidation}
                    >
                      Check form validation
                    </button>
                  )}
                </div>
              </form>
              <div className="login text-center text-dark mt-3 d-flex align-items-center justify-content-center">
                <p className="p-0 m-0">Already have an account?</p>
                <Link to="/login" className="mx-1 text-dark">
                  Login
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Signup;
