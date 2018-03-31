import React, { Component } from "react";
import { Link } from "react-router-dom";

import ContactDetails from "./components/ContactDetails.js";

export default class Contact extends Component {
  render() {
    return (
      <li className="contact-page">
        <h2>
          <div className="name">
            <Link to={"/" + this.props.contact._id}>
              {this.props.contact.name}
            </Link>
          </div>
        </h2>
        <ContactDetails details={this.props.contact.details} />
      </li>
    );
  }
}
