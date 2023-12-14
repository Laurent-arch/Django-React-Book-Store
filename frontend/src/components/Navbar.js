import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const Navbar = () => {

  return (
    <header>
      <nav className="navbar">
        <div>
          <Link to="/" className="logo">
            Home page
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
        <ul className="nav-links">
          <li className="user-info">
            <span>Welcome !</span>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/login" className="login">
              Sign In / Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;