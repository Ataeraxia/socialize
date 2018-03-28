import React, { Component } from "react";

export default class Contact extends Component {
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

    const detailsList = isDetails ? this.renderDetails() : "";

    return (
      <li>
        <h2>
          {this.props.contact.name}
        </h2>
        {detailsList}
      </li>
    );
  }
}