import React from "react";

const AddContact = () => {
  const [contact, setContact] = React.useState({
    name: "",
    phone_number: "",
    image: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name, phone_number } = contact;
    if (name && phone_number) {
      const newContact = { ...contact, id: new Date().getTime().toString() };
      const postConfig = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      };
      const post = async () => {
        let response = await fetch(
          "http://localhost:3002/contacts",
          postConfig
        );
        console.log(response.status, response);
      };
      post();
      alert("Contact saved");
    } else {
      alert("Please complete the form");
    }
  };

  return (
    <div className="container py-5">
      <div className="section-header text-center">
        <h1>Add contact</h1>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="form text-start p-4 bg--dark br-1"
        style={{ maxWidth: "350px", margin: "0 auto" }}
      >
        <div className="form--group">
          <label htmlFor="name" className="form_label mb-1">
            Contact name
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              required
              id="name"
              placeholder="Enter contact name"
              aria-label="name"
              name="name"
            />
          </div>
        </div>
        <div className="form--group">
          <label htmlFor="phone_number" className="form_label mb-1">
            Phone number
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-phone"></i>
            </span>
            <input
              onChange={handleChange}
              type="number"
              className="form-control"
              required
              id="phone_number"
              placeholder="Enter phone number"
              aria-label="phone_number"
              name="phone_number"
            />
          </div>
        </div>
        <div className="cta text-center mt-4">
          <button
            type="submit"
            to="/dashboard"
            className={`btn bg--primary btn-rounded`}
          >
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
