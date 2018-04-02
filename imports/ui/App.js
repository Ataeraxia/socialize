import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Contacts } from "../api/contacts.js";
import Contact from "./Contact.js";
import NewContactForm from "./components/NewContactForm.js";
import ContactsIndexPage from "./pages/ContactsIndexPage.js";
import ContactDetailsPage from "./pages/ContactDetailsPage.js";

class App extends Component {
  renderContacts() {
    return this.props.contacts.map(contact => (
      <Contact key={contact._id} contact={contact} />
    ));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navbar">
            <h1>
              <Link to="/">socialize</Link>
            </h1>
          </div>

          <Switch>
            <Route exact path="/" component={ContactsIndexPage} />
            <Route path="/:contactId" component={ContactDetailsPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withTracker(() => {
  return {
    contacts: Contacts.find({}).fetch()
  };
})(App);
