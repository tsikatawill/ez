import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="get-started py-5 bg--dark">
      <div className="container py-5">
        <div className="section-header">
          <h2 className="fw-bold">Get started in three easy steps</h2>
          <p>
            Follow these easy and simplified steps to create and manage your
            awesome contact list.
          </p>
        </div>
        <div
          className="steps-cards my-5"
          style={{
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)",
          }}
        >
          <StepCard
            title="Create an account"
            text="Set up your free account with EZ Contacts to access to the full features of our web service"
          />
          <StepCard
            title="Login"
            text="After a successful account creation, enter your username and your password at the login screen to access your dashboard"
          />
          <StepCard
            title="Add contacts"
            text="Start adding new contacts as you like. Get access to your contact list wherever you are and on whichever device you use."
          />
        </div>
        <div className="cta">
          <Link to="/signup" className="btn bg--primary btn-rounded">
            Create a free account
          </Link>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ number, title, text }) => {
  return (
    <div
      className="step-card p-4 my-1"
      style={{
        minHeight: "200px",
        width: "250px",
        margin: "0 auto",
        position: "relative",
        border: "2px solid var(--accent-yellow)",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <strong style={{ color: "var(--accent-yellow)" }}>{title}</strong>
      <p>{text}</p>
    </div>
  );
};

export default GetStarted;
