import React from 'react';
import Navigation from '../Navigation';
import './style.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="site-title">Edwin Gonzalez</h1>
                <Navigation/>
            </div>
        </header>
    );
}

export default Header;