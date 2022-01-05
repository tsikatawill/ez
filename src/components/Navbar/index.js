import React from "react";
import Logo from "../../images/logo.png";
import HeaderStyles from "./Header.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg--dark">
      <div
        className={`${HeaderStyles.container} container py-3 d-sm-flex align-items-center justify-content-between`}
      >
        <Link to="/" className="logo">
          <img src={Logo} alt={Logo} width="200px" />
        </Link>
        <ul className="nav-menu d-flex mt-2 mt-sm-0 justify-content-center align-items-center">
          <li>
            <Link to="/login" className="mx-3">
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="btn btn-rounded bg--primary text-light"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
