import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
state = {
    contacts: [{
            id: 1,
            name: "Jane Doe",
            email: "jane.doe@gmail.com",
            phone: "555-000-1000"
        }, {
            id: 2,
            name: "Joe Budden",
            email: "joe.budden@gmail.com",
            phone: "454-000-0000"
        }, {
            id: 3,
            name: "Mike Will",
            email: "mike.will@gmail.com",
            phone: "978-000-0000"
        },
        {
            id: 4,
            name: "",
            email: "",
            phone: "000-000-0000"
        }
    ]
};
    render() {
        const { contacts } = this.state;
        return (
            <div className="card card-body mb-3">
                {contacts.map(contact=><Contact key={contact.id} contact={contact}/>)}
            </div>
        );
    }
}

export default Contacts;
