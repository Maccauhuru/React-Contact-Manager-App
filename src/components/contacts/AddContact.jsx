import React, { Component } from "react";

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: ""
        };
    }  
    onChangeHandler=e=>this.setState({
        [e.target.name] : e.target.value
    });
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        const { name , email , phone } = this.state;
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
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone :</label>
                            <input 
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="phone"
                                name="phone"
                                value={phone}
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Add Contact" 
                            className="btn btn-dark btn-block"
                            onClick={this.onSubmit}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;
