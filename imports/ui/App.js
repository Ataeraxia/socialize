import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Contacts } from "../api/contacts.js";
import Contact from "./Contact.js";

class App extends Component {
    renderContacts() {
        return this.props.contacts.map((contact) => (
            <Contact key={contact._id} contact={contact} />
        ));
    }

    render() {
        return (
            <div className="App"> 
                <div className="navbar">
                    <h1>
                        <a href="/">socialize</a>
                    </h1>
                </div>

                <div className="contacts-list">
                    {this.renderContacts()}
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        contacts: Contacts.find({}).fetch(),
    };
})(App);