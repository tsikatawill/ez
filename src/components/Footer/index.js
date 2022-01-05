import React from "react";
import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer bg--dark">
      <div className="container py-2 py-sm-3 text-center">
        <img className="mb-4" src={Logo} alt={Logo} />
        <p>
          Created with 💙 by{" "}
          <a
            className="text-warning"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/tsikatawill"
          >
            William M. Tsikata
          </a>{" "}
          &copy; 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
