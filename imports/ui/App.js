import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Link, Switch, Route } from "react-router-dom";

import { Contacts } from "../api/contacts.js";
import Contact from "./Contact.js";
import NewContactForm from "./components/NewContactForm.js";
import ContactsIndexPage from "./pages/ContactsIndexPage.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowNewContactForm: false };
  }

  handleShowNewContactFormClick() {
    this.setState({
      isShowNewContactForm: !this.state.isShowNewContactForm
    });
  }

  renderContacts() {
    return this.props.contacts.map(contact => (
      <Contact key={contact._id} contact={contact} />
    ));
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1>
            <Link to="/">socialize</Link>
          </h1>
        </div>

        <Switch>
          <Route exact path="/" component={ContactsIndexPage} />
        </Switch>

        <div className="page">
          {this.state.isShowNewContactForm && <NewContactForm />}
          <div className="contacts-list">{this.renderContacts()}</div>

          <button
            className="toggle-new-contact"
            onClick={this.handleShowNewContactFormClick.bind(this)}
          >
            &#43;
          </button>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    contacts: Contacts.find({}).fetch()
  };
})(App);
