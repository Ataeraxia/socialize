import React, { Component } from "react";

export default class ContactDetails extends Component {
  render() {
    return (
      <div className="details">
        <div className="last-contact">
          <span className="last-contact-label">
            Last Contact:
          </span>

          <span className="last-contact-data">
            {this.props.details.lastContact.toLocaleString('en-CA', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </span>
        </div>

        <h3>
          Numbers
        </h3>
        
        <hr />

      </div>
    );
  }
}