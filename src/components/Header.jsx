import React from "react";
import PropTypes from "prop-types";

const Header =(props) => {
    const { title} = props;   
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a className="navbar-brand" href="/">
                    {title}
                </a>
            </div>
            <div>
                <ul className="navbar-nav mr-auto"></ul>
            </div>
        </nav>
    );
};

Header.defaultProps ={
    title : "Fresh Vegetable 2K18",
    subtitle : "2018"
};

Header.propTypes={
    title : PropTypes.string.isRequired
};

export default Header;