import { Link } from "react-router-dom";
import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Contacts } from "../../api/contacts.js";
import IndexContact from "../components/IndexContact.js";

class ContactsIndexPage extends Component {
  renderIndexContact() {
    return this.props.contacts.map(indexContact => (
      <IndexContact key={indexContact._id} indexContact={indexContact} />
    ));
  }

  render() {
    return (
      <div className="contacts-index-page page">
        {this.renderIndexContact()}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    contacts: Contacts.find().fetch()
  };
})(ContactsIndexPage);
