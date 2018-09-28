import React,{ Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component{
        state = {active : true};
        handleClick = (x,_e) => {
        console.log(x.email,_e.target);
    }
    render(){
        const { name, email , phone } = this.props.contact;
        return(
            <div className="card card-body mb-3">
                <h4>{name}<i className="fas fa-sort-down" onClick={this.handleClick.bind(this,{name,email,phone})}></i></h4>
                <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul>
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;