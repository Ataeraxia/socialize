import { Link } from "react-router-dom";
import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Contacts } from "../../api/contacts.js";
import IndexContact from "../components/IndexContact.js";
import NewContactForm from "../components/NewContactForm.js";

class ContactsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowNewContactForm: false };
  }

  handleShowNewContactFormClick() {
    this.setState({
      isShowNewContactForm: !this.state.isShowNewContactForm
    });
  }

  renderIndexContact() {
    return this.props.contacts.map(indexContact => (
      <IndexContact key={indexContact._id} indexContact={indexContact} />
    ));
  }

  render() {
    return (
      <div className="contacts-index-page page">
        {this.state.isShowNewContactForm && <NewContactForm />}

        {this.renderIndexContact()}

        <button
          className="toggle-new-contact"
          onClick={this.handleShowNewContactFormClick.bind(this)}
        >
          &#43;
        </button>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    contacts: Contacts.find().fetch()
  };
})(ContactsIndexPage);
