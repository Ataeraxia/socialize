import React, { Component } from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../../api/utils.js";

export default class IndexContact extends Component {
  render() {
    return (
      <li className="index-contact">
        <h2>
          <div className="name">
            <Link to={"/" + this.props.indexContact._id}>
              {this.props.indexContact.name}
            </Link>
          </div>
          {this.props.indexContact.details.lastContact && (
            <div className="index-last-contact">
              <h3>{formatDate(this.props.indexContact.details.lastContact)}</h3>
            </div>
          )}
        </h2>
      </li>
    );
  }
}
