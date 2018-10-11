import React, { Component } from "react";

class AddContact extends Component {
    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const contact = {
            name : this.nameInput.refs.current.value,
            email : this.emailInput.refs.current.value,
            phone : this.phoneInput.refs.current.value
        };
        console.log(contact);
    }

    static defaultProps = {
        name : "J.Treds",
        email : "jt@gmail.com",
        phone : "555-555-5555"
    }
    render() {
        const { name , email , phone } =this.props;
        return (
            <div className="card mb-4">
                <div className="card-header bg-dark text-white">Add New Contacts</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name :</label>
                            <input 
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="name"
                                name="name"
                                defaultValue={name}
                                ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <input 
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="email"
                                name="email"
                                defaultValue={email}
                                ref={this.emailInput}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone :</label>
                            <input 
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="phone"
                                name="phone"
                                defaultValue={phone}
                                ref={this.phoneInput}
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Add Contact" 
                            className="btn btn-dark btn-block"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;
