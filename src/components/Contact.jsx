import React,{ Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component{
    render(){
        const { name , email , phone } = this.props;
        return(
            <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        );
    }
}

Contact.defaultProps = {
    name: "unknown"
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string
};

export default Contact;