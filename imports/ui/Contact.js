import React, { Component } from "react";

import ContactDetails from "./components/ContactDetails.js";

export default class Contact extends Component {
  render() {
    return (
      <li className="contact-page">
        <h2>
          <div className="name">
          {this.props.contact.name}
          </div>
        </h2>
        <ContactDetails details={this.props.contact.details}/>
      </li>
    );
  }
}