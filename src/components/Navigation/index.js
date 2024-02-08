import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NavLink({ to, closeMenu, children }) {
    return (
        <li>
            <Link to={to} onClick={closeMenu}>
                {children}
            </Link>
        </li>
    );
}

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { path: "/", text: "About Me" },
        { path: "/portfolio", text: "Portfolio" },
        { path: "/contact", text: "Contact" },
        { path: "/resume", text: "Resume" }
    ];

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className="nav-links">
                {navLinks.map(link => (
                    <NavLink key={link.text} to={link.path} closeMenu={closeMenu}>
                        {link.text}
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
