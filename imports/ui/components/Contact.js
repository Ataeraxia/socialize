import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import ContactDetails from "./ContactDetails.js";
import { Contacts } from "../../api/contacts.js";

export default class Contact extends Component {
  handleDelClick() {
    Contacts.remove({ _id: this.props.contact._id }, { justOne: true });
    <Redirect to="/" />;
  }
  render() {
    return (
      <div className="contact-wrapper">
        <h2>
          <div className="name">
            <Link to={"/" + this.props.contact._id}>
              {this.props.contact.name}
            </Link>
          </div>
          <div className="delete">
            {this.props.contact && (
              <button onClick={this.handleDelClick.bind(this)}>X</button>
            )}
          </div>
        </h2>
        <ContactDetails details={this.props.contact.details} />
      </div>
    );
  }
}
