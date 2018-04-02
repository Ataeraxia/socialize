import React, { Component } from "react";
import { withRouter } from "react-router";
import { withTracker } from "meteor/react-meteor-data";

import { Contacts } from "../../api/contacts.js";

class ContactDetailsPage extends Component {
  render() {
    const { match, location, history, contact } = this.props;
    return <div className="page">I like butts, {contact.name}</div>;
  }
}

export default withTracker(props => {
  Meteor.subscribe("contacts");
  const findContact = Contacts.findOne({ _id: props.match.params.contactId });
  return {
    contact: Contacts.findOne({ _id: props.match.params.contactId })
  };
})(ContactDetailsPage);