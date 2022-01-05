import React from "react";
import Avatar from "../../images/avatar.png";
import Avatar2 from "../../images/avatar2.png";
import Avatar3 from "../../images/avatar3.png";
import Avatar4 from "../../images/avatar4.png";

const Reviews = () => {
  return (
    <section className="reviews py-5">
      <div className="container py-5">
        <div className="section-header">
          <h2>User reviews</h2>
          <p>These are some of our users' views after using our services.</p>
        </div>
        <div
          className="reviews"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <ReviewCard
            text="Great web app. I can easily get access to all my contacts wherever I am. Nice 😊"
            name="Michael D. Doudu"
            position="Creator, Leaf PHP"
            image={Avatar2}
          />
          <ReviewCard
            text="I am a big fan of the general user experience. I love it."
            name="Janet Tsikata"
            position="Psychiatric Nurse"
            image={Avatar3}
          />
          <ReviewCard
            text="Everything just updates in real time across all my devices. The speed is insane."
            name="David Opata"
            position="Network engineer, Microsoft"
            image={Avatar}
          />
          <ReviewCard
            text="Nice overall experience. Can't complain."
            name="Edward Assempah"
            position="Lead programs manager, Microsoft"
            image={Avatar4}
          />
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ image, name, position, text }) => {
  return (
    <div
      className="review-card col-md-6 m-3 p-3 d-flex align-items-center br-1"
      style={{
        background: "#ccc",
        maxWidth: "500px",
        width: "100%",
      }}
    >
      <img src={image} alt={image} width="100px" />
      <div className="text text-start mx-3">
        <strong>{name}</strong>
        <br />
        <small>{position}</small>
        <p className="mt-1">{text}</p>
      </div>
    </div>
  );
};

export default Reviews;
