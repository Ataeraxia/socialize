import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Contacts } from "../../api/contacts.js";

export default class NewContactForm extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();

    // const lastContact = ReactDOM.findDOMNode(
    //   this.refs.lastContact
    // ).value.trim();

    const numbersPhone = ReactDOM.findDOMNode(
      this.refs.numbersPhone
    ).value.trim();

    Contacts.insert({
      name: name,
      details: {
        lastContact: null,
        numbers: {
          phone: numbersPhone
        }
      }
    });

    ReactDOM.findDOMNode(this.refs.name).value = "";
    // ReactDOM.findDOMNode(this.refs.lastContact).value = "";
    ReactDOM.findDOMNode(this.refs.numbersPhone).value = "";
  }

  render() {
    return (
      <div className="new-contact-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Full name" ref="name" />

          <input type="tel" placeholder="Phone number" ref="numbersPhone" />

          <input type="submit" onSubmit={this.handleSubmit.bind(this)} />
        </form>
      </div>
    );
  }
}
