import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <li>{this.props.contact.name}</li>
    );
  }
}