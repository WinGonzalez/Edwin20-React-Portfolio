import React from 'react';
import './style.css';

// Define social media links as an array of objects for easier management and scalability
const socialMediaLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/WinGonzalez',
        icon: 'fab fa-github',
    },
    {
        name: 'LinkedIn',
        url: '',
        icon: 'fab fa-linkedin',
    },
    {
        name: 'Google Mail',
        url: '',
        icon: 'fab fa-google',
    },
];

function SocialLink({ url, icon }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="social">
            <i className={icon}></i>
        </a>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text"></p>
            <div className="social-media-links">
                {socialMediaLinks.map((link) => (
                    <SocialLink key={link.name} url={link.url} icon={link.icon} />
                ))}
            </div>
        </footer>
    );
}

export default Footer;
