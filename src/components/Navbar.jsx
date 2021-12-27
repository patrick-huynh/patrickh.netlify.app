import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { Link, useHistory } from 'react-router-dom';

/**
 * Navbar component
 * @param {object} props
 * @returns {JSX} JSX to render the component
 */

export const Navbar = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar-box">
      <div className="navbar-box__navbar">
        <div className="navbar-box__navigation">
          <div
            className="navbar-box__header"
          >
            <div
              className="navbar-bars"
              onClick={() => setShowMenu(!showMenu)}
            >
              <i className={`fas fa-${showMenu ? 'times' : 'bars'}`}></i>
            </div>
            <div
              className="navbar-logo"
              onClick={() => history.push('/')}
            >
              patrick
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="navbar-filler">
            </div>
          </div>
          <div className={showMenu ? "navbar" : "navbar-close"}>
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/about" className="navbar-item">About</Link>
            <Link to="/portfolio" className="navbar-item">Portfolio</Link>
            <Link to="/contact" className="navbar-item">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
