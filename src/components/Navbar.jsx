import React from 'react';
import '../styles/Navbar.scss';

/**
 * Navbar component
 * @param {object} props
 * @returns {JSX} JSX to render the component
 */

export const Navbar = () => {

    return (
        <div className="navbar-box-top">
            <div className="navbar-box-top__navbar">
                <div className="navbar-box-top__navigation">
                    <div className="navbar-box-top__logo">
                        <div className="navbar-logo">Hello</div>
                    </div>
                    <div className="navbar">
                        <a href="/" className="navbar-item">Home</a>
                        <a href="/about" className="navbar-item">About</a>
                        <a href="/portfolio" className="navbar-item">Portfolio</a>
                        <a href="/shop" className="navbar-item">Shop</a>
                        <a href="/blog" className="navbar-item">Blog</a>
                        <a href="/contact" className="navbar-item">Contact</a>
                    </div>
                </div>
                <hr className="navbar-box-top__seperator" />
            </div>
        </div>
    );
};
