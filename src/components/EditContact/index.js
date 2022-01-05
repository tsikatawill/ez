import React from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../apiURL";

const EditContact = () => {
  const { id } = useParams();
  const [contact, setContact] = React.useState({
    name: "",
    phone_number: "",
  });

  React.useEffect(
    () => async () => {
      let url = `${apiURL}/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setContact(data);
      let name = document.getElementById("name");
      let phone_number = document.getElementById("phone_number");
      name.value = data.name;
      phone_number.value = data.phone_number;
      return {
        name: data.name,
        phone_number: data.name,
      };
    },
    [id]
  );

  const handleChange = (e) => {
    if (e) {
      const name = e.target.name;
      const value = e.target.value;
      setContact({ ...contact, [name]: value });
    } else {
      setContact(contact);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name || contact.phone_number) {
      const patchConfig = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      };
      const patch = async () => {
        let response = await fetch(`${apiURL}/${id}`, patchConfig);
        console.log(response.status, response);
      };
      patch();
      alert("Contact saved");
      let name = document.getElementById("name");
      let phone_number = document.getElementById("phone_number");
      name.value = "";
      phone_number.value = "";
    } else {
      alert("Please complete the form");
    }
  };

  return (
    <div className="container py-5">
      <div className="section-header text-center">
        <h1>Edit contact</h1>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="form p-4 bg--dark br-1"
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
