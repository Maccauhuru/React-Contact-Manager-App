import React, { Component } from "react";

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: ""
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }  
    onChangeHandler (e){
        this.setState({
            name : e.target.value
        });
    }
    onAddContactHandler(e){
        e.preventDefault();
        e.target.value="";
    }
    render() {
        const { name , email , phone } = this.state;
        return (
            <div className="card mb-4">
                <div className="card-header bg-dark text-white">Add New Contacts</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name :</label>
                            <input 
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="name"
                                name="name"
                                value={name}
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <input 
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="email"
                                name="email"
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone :</label>
                            <input 
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="phone"
                                name="phone"
                                vaalue={phone}
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Add Contact" 
                            className="btn btn-dark btn-block"
                            onClick={this.onAddContactHandler}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;
