import React from "react";
import Bg from "../../images/bg.jpg";
import { Link } from "react-router-dom";

const Hero = ({ showBtn }) => {
  return (
    <section
      className="hero py-5"
      style={{
        background: `url(${Bg}) center center/cover no-repeat`,
        color: "white",
      }}
    >
      <div className="container py-5 text-center" style={{ maxWidth: "600px" }}>
        <h1 className="fw-bold">Welcome to EZ Contacts</h1>
        <p>
          At EZ Contacts, we give users the ability to effortlessly create and
          manage an online address book that can be accessed anywhere on any
          device over an internet connection.
        </p>
        {showBtn && (
          <Link to="/signup" className="btn btn-rounded bg--primary">
            Get started
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
