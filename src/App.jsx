import React, { Component } from "react";
import Header from "./components/layout/Header";
import { Provider } from "./context";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
    render() {
        return (
            <Provider>
                <div>
                    <Header title={"Contact Management App v1.0"}/>
                    <div className="container">
                        <AddContact />
                        <Contacts/>
                    </div>
                </div>
            </Provider>
        );
    }
}
export default App;