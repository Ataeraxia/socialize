import React, { Component } from "react";

export default class ContactDetails extends Component {
  render() {
    const phoneComp = (
      <div className="details-item">
        <span className="details-item-label">
          Phone number:
        </span>
        <span className="details-item-data">
          {this.props.details.numbers.phone}
        </span>
      </div>
    );
    return (
      <div className="details">
        <div className="details-item">
          <span className="details-item-label">
            Last Contact:
          </span>

          <span className="details-item-data">
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
        
        {phoneComp}
      </div>
    );
  }
}