import React,{ Component } from "react";
import PropTypes from "prop-types";
const Context = React.createContext();

const reducer = (state,action) =>{
    switch(action.type){
    case "DELETE_CONTACT" :
        return {
            ...state,
            contacts : state.contacts.filter(contact=>contact.id !== action.payload)
        };
    default : return state;
    }
};
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
        }],
        dispatch: action => this.setState(state => reducer(state, action))
    };
    render(){
        const { children } = this.props;
        return(
            <Context.Provider value={this.state}>
                {children}
            </Context.Provider>
        );
    }
}
export const Consumer = Context.Consumer;

Provider.propTypes = {
    children :  PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node),PropTypes.element])
};
