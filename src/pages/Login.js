import React from "react";
import Logo from "../images/logo.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  document.title = "Log into your account";
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [valid, setValid] = React.useState(false);

  const handleValidation = () => {
    let btn = document.querySelector(".btn-rounded");
    if (username && password) {
      setValid(valid);
      setValid(true);
      btn.classList.remove("disabled");
    } else {
      setValid(false);
    }
  };

  return (
    <div className="bg-warning">
      <div
        className="container"
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          className="form p-4 bg--dark br-1"
          style={{ maxWidth: "350px", width: "100%", margin: "0 auto" }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="logo-wrapper text-center mb-4">
            <img src={Logo} alt={Logo} />
          </div>
          <div className="form--group">
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
          <div className="form--group">
            <label htmlFor="password1" className="form_label mb-1">
              Password
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleValidation();
                }}
                type="password"
                className="form-control"
                required
                id="password1"
                placeholder="Enter your password"
                aria-label="password1"
                name="password1"
              />
            </div>
          </div>
          <div className="cta text-center mt-4">
            <Link
              to="/dashboard/contacts"
              className={`btn bg--primary btn-rounded disabled`}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
