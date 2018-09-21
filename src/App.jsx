import React, { Component } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title={"Contact Management App v1.0"}/>
                <Contact name="J.Treds" email="jt@gmail.com" phone="555-555-5555"/>
                <Contact name="Jane Doe" email="jane.doe@gmail.com" />
                <Contact email="unknown@gmail.com" phone="unknown number"/>
            </div>
        );
    }
}
export default App;