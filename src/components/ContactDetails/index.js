import React from "react";
import Avatar from "../../images/avatar.png";
import Delete from "../../images/delete.png";
import Edit from "../../images/edit.png";
import Call from "../../images/call.png";
import { Link, useParams } from "react-router-dom";
import { apiURL } from "../apiURL";
import "./Modal.css";

const ContactDetails = () => {
  const [contact, setContact] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();
  const [contacts, setContacts] = React.useState([]);

  const getContacts = async () => {
    let response = await fetch(apiURL);
    let data = await response.json();
    setContacts(data);
    console.log(contacts);
  };

  React.useEffect(getContacts, []);

  const deleteContact = async () => {
    let newList = contacts.filter((item) => item.id !== contact.id);
    setContacts(newList);
    const deleteOptions = { method: "DELETE" };
    fetch(`${apiURL}/${id}`, deleteOptions);
    alert("contact deleted");
  };

  const handleModalToggle = () => {
    let modal = document.querySelector(".modal");
    modal.classList.toggle("active");
  };

  const getContact = async () => {
    setLoading(true);
    let response = await fetch(`${apiURL}/${id}`);
    let data = await response.json();
    setContact(data);
    setLoading(false);
  };

  React.useEffect(getContact, []);
  return (
    <div className="container py-5">
      <div className="section-header text-center">
        <h1>Contact Details</h1>
      </div>
      <div className="details text-center">
        {loading ? (
          "Loading contact details"
        ) : (
          <div
            className="contact-details-card p-4 br-1"
            style={{ maxWidth: "500px", margin: "0 auto", background: "#ccc" }}
          >
            <img src={Avatar} alt={contact.name} className="mb-3" />
            <h2 className="fw-bold">{contact.name}</h2>
            <h3>{contact.phone_number}</h3>
            <div className="ctas">
              <a href={`tel:${contact.phone_number}`}>
                <img src={Call} alt="Call" width="40px" />
              </a>
              <Link
                to={`/dashboard/contacts/edit-contact/${id}`}
                className="mx-2"
              >
                <img src={Edit} alt="edit" width="40px" />
              </Link>
              <span onClick={handleModalToggle} style={{ cursor: "pointer" }}>
                <img src={Delete} alt="delete" width="40px" />
              </span>
              <div className="modal mt-2" id="modal">
                <div
                  className="inner br-1 bg-light p-3 text-dark"
                  style={{ width: "fit-content" }}
                >
                  <p>
                    Sure to delete <strong>{contact.name}</strong>?
                  </p>
                  <div className="btns">
                    <Link
                      to={`/dashboard/contacts/delete-contact/${contact.id}`}
                      className="btn btn-danger btn-rounded"
                      onClick={deleteContact}
                    >
                      Delete
                    </Link>
                    <div
                      className="btn btn-dark btn-rounded"
                      onClick={handleModalToggle}
                    >
                      Cancel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactDetails;
