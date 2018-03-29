import React, { Component } from "react";

export default class Contact extends Component {
  // This does nothing right now
  renderDetails() {
    return (
      <div className="last-contact-div">
        { this.props.contact.details.lastContact &&
          <li className="last-contact">
            <span className="last-contact-label">Last Contact:</span><span className="last-contact-data">{this.props.contact.details.lastContact.toLocaleString('en-CA', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}</span>
          </li>
        }
      </div>
    );
  }

  checkIsThere(toCheck) {
    
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

    const detailsComp = ( <ul>{this.renderDetails()}</ul> );

    return (
      <li className="contact-page">
        <h2>
          <div className="name">
          {this.props.contact.name}
          </div>
        </h2>
        {detailsComp}
      </li>
    );
  }
}