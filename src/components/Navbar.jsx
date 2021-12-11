import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

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
                        <div className="navbar-logo">patrick.</div>
                    </div>
                    <div className="navbar">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/about" className="navbar-item">About</Link>
                        <Link to="/portfolio" className="navbar-item">Portfolio</Link>
                        <Link to="/blog" className="navbar-item">Blog</Link>
                        <Link to="/contact" className="navbar-item">Contact</Link>
                    </div>
                </div>
                <hr className="navbar-box-seperator" />
            </div>
        </div>
    );
};
