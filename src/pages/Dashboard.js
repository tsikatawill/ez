import React from "react";
import Logo from "../images/logo.png";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const handleNavToggle = () => {
    let menu = document.querySelector("div.menu");
    menu.classList.toggle("closed");
  };

  document.title = "Dashboard";
  return (
    <div className="dashboard">
      <div className="menu closed bg--dark p-4">
        <button className="menu-toggle btn bg--dark" onClick={handleNavToggle}>
          <i className="fas fa-hamburger"></i>
        </button>
        <div className="logo ">
          <img src={Logo} alt={Logo} />
          <div className="logo-placeholder">Ez</div>
        </div>
        <nav className="nav-menu  mt-4">
          <ul className="">
            <Link className="home" to="/">
              <li className="home text-white" onClick={handleNavToggle}>
                <i className="fas fa-home "></i>
                <span className="text home-text">Home</span>
              </li>
            </Link>
            <Link className="view" to="/dashboard/contacts">
              <li className="view text-white" onClick={handleNavToggle}>
                <i className="fas fa-address-book"></i>
                <span className="text view-text">View contacts</span>
              </li>
            </Link>
            <Link className="add" to="/dashboard/add-contact">
              <li className="add text-white" onClick={handleNavToggle}>
                <i className="fas fa-user-plus"></i>
                <span className="text add-text">Add contact</span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
