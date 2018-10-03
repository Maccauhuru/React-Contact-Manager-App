import React,{ Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
        state = {showContactInfo : false};

        onShowClick = () => {
        this.setState({
            showContactInfo : !this.state.showContactInfo
        });
    };
        onDeleteClick = () => {
        this.props.deleteClickHandler();
    };
    render(){
        const { name, email , phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return(
            <div className="card card-body mb-3">
                <h4>{name}<i className="fas fa-sort-down" onClick={this.onShowClick} style={{cursor:'pointer'}}></i><i onClick={this.onDeleteClick} className='fas fa-times' style={{cursor:'pointer',float:'right', color:'red' , border:'1px solid red' ,padding:'5px'}}></i></h4>
                {showContactInfo && <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul>} 
            </div>
        );
    };
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler :PropTypes.func.isRequired
};

export default Contact;