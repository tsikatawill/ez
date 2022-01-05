import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ViewContacts from "./components/ViewContacts";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";
import EditContact from "./components/EditContact";
import Dashboard from "./pages/Dashboard";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-contact" element={<AddContact />} />
          <Route path="contacts" element={<ViewContacts />} />
          <Route path="contacts/edit-contact/:id" element={<EditContact />} />
          <Route
            path="contacts/delete-contact/:id"
            element={<Navigate replace to="/dashboard/contacts" />}
          />
          <Route path="contacts/:id" element={<ContactDetails />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
