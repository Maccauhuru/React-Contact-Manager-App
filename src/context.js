import React,{ Component } from "react";
const Context = React.createContext();

export class Provider extends Component {
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
            }]
    }
    render(){
        return(
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;