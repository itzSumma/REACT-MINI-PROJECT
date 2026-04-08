import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/Mobiles">Mobiles</a>
                <a href="/Laptop">Laptop</a>
                <a href="/about">About</a> */}

                <NavLink to="/">Home</NavLink>
                <NavLink to="/Mobiles">Mobiles</NavLink>
                <NavLink to="/Laptop">Laptop</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="about2">About2</NavLink>
                <NavLink to="posts">Posts</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;