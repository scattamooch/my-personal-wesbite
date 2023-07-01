import React from "react";
import {NavLink} from "react-router-dom";

function Header() {

    return(
        <nav className="nav-bar">
            <div className="nav-bar-container">
                <h1 className="nav-bar-logo">Placeholder</h1>
                <div className="nav-links-container">
                    <NavLink exact to="/" className="nav-links">Home</NavLink>
                    <NavLink to="/hobbies" className="nav-links">Hobbies</NavLink>
                    <NavLink to="/projects" className="nav-links">Projects</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;