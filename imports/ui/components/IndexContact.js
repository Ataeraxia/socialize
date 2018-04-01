import React, { Component } from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../../api/utils.js";

export default class IndexContact extends Component {
  render() {
    return (
      <Link className="index-contact" to={"/" + this.props.indexContact._id}>
        <li>
          <h2>
            <span className="name">{this.props.indexContact.name}</span>
            {this.props.indexContact.details.lastContact && (
              <div className="index-last-contact">
                <h3>
                  {formatDate(this.props.indexContact.details.lastContact)}
                </h3>
              </div>
            )}
          </h2>
        </li>
      </Link>
    );
  }
}
