import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <h1>Arek's Blog</h1>
            <div className="links">
                <Link to="/">
                    Home
                </Link>
                <Link to="/create">
                    New Blog
                </Link>
                <Link to="/me">
                    About me
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;