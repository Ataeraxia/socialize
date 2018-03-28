import React, { Component } from "react";

export default class Contact extends Component {
  // This does nothing right now
  renderDetails() {
    return (
      <ul>
        <li>
          {this.props.contact.details.lastContact.toLocaleString()}
        </li>
      </ul>
    )
  }
  render() {
    const isDetails = this.props.contact.details;

    // This does nothing right now
    const detailsList = isDetails ? this.renderDetails() : "";

    const lastContact = isDetails ? (
      <span className="last-contact">{this.props.contact.details.lastContact.toLocaleString('en-CA', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })}</span>
    ) : ({});

    return (
      <li>
        <h2>
          <div className="name">
          {this.props.contact.name}
          </div>
          {lastContact}
        </h2>
      </li>
    );
  }
}