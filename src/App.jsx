import React, { Component } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title={"Contact Management App v1.0"}/>
                <div className="container">
                    <Contacts/>
                </div>

            </div>
        );
    }
}
export default App;