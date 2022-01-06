import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../images/avatar.png";
import { apiURL } from "../apiURL";

const ViewContacts = () => {
  const [contacts, setContacts] = React.useState([]);
  const [fetchError, setFetchError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getContacts = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiURL);
        const data = await response.json();
        if (!response.ok) throw Error("Error during fetch operation");
        setContacts(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
        console.log(fetchError);
      } finally {
        setLoading(false);
      }
    };

    (async () => await getContacts())();
  }, [fetchError]);

  return (
    <div className="container py-5">
      <div className="section-header text-center">
        <h1>Your contact list</h1>
      </div>

      {loading ? (
        <p className="text-center">Grabbing contacts...</p>
      ) : (
        <ul
          className="contacts"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {contacts.length > 0 ? (
            contacts.map((contact) => {
              return (
                <li className="text-dark" key={contact.id}>
                  <Link to={`/dashboard/contacts/${contact.id}`}>
                    <ContactCard {...contact} />
                  </Link>
                </li>
              );
            })
          ) : (
            <div className="text-center">
              <p>
                Oops! Your contact list is looking a little empty. Wanna add
                some contacts?
              </p>
              <Link to="/dashboard/add-contact" className="cta">
                <button className="btn bg--primary btn-rounded">
                  Add contact
                </button>
              </Link>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

const ContactCard = ({ name, phone_number }) => {
  return (
    <div
      className="contact-card d-flex p-2 mb-2 mb-sm-0 align-items-center br-1"
      style={{
        background: "#ccc",

        margin: "0 auto",
        border: "1px solid var(--accent-yellow)",
      }}
    >
      <img src={Avatar} alt="contact" width="70px" />
      <div className="text text-dark text-start mx-3">
        <strong>{name}</strong>
        <br />
        <p>{phone_number}</p>
      </div>
    </div>
  );
};

export default ViewContacts;
