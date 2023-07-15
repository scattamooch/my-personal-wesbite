import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import Logo from "/home/sstevens0215/Development/Code/lizzies-website/src/Images/Logo.png"

function Header() {

    const location = useLocation();

  // Extract the component name from the location pathname
  const componentName = location.pathname === '/' ? 'Home' :
    location.pathname.split('/').filter(Boolean).join(' / ').replace(/^\w/, (c) => c.toUpperCase());

    return(
        <nav className="nav-bar">
            <div className="nav-bar-container">
                <NavLink exact to="/" className="logo-link">
                <img src={Logo} className="logo ui medium rounded image" alt="logo"/>
                </NavLink>
                 {/* https://chicfetti.com/monogram-maker/  */}
                <div className="nav-links-container">
                    <NavLink exact to="/" className="nav-links">Home</NavLink>
                    <NavLink to="/hobbies" className="nav-links">Hobbies</NavLink>
                    <NavLink to="/projects" className="nav-links">Projects</NavLink>
                </div>
                <h1 className="nav-bar-title">{componentName}</h1>
            </div>
        </nav>
    )
}

export default Header;