import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import Logo from "/home/sstevens0215/Development/Code/lizzies-website/src/Images/Logo.png"
import {useEffect, useRef} from "react";
import SpeedDial from "./SpeedDial";

function Header() {

    return(
        <nav className="nav-bar">
            <div className="nav-bar-container">
                <div className="logo-container">
                <NavLink exact to="/" className="logo-link">
                <img src={Logo} className="logo" alt="logo"/>
                </NavLink>
                </div>
                 {/* https://chicfetti.com/monogram-maker/  */}
                <div className="nav-links-container">
                    <NavLink exact to="/" className="nav-links">Home</NavLink>
                    <NavLink to="/hobbies" className="nav-links">Hobbies</NavLink>
                    <NavLink to="/projects" className="nav-links">Projects</NavLink>
                    <NavLink to="/contact" className="nav-links">Contact</NavLink>
                </div>
                <h1 className="nav-bar-title">Placeholder</h1>
                <div className="speed-dial-container">
                <SpeedDial />
                </div>
            </div>
        </nav>
    )
}

export default Header;