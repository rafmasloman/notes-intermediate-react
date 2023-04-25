import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import ToggleTheme from './ToggleTheme';
import PropTypes from 'prop-types';

const Navbar = ({ logout }) => {
  //   console.log(logout());
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="nav-header">
          <h2>MyNotes</h2>
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Beranda
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/archives" className="nav-link">
            Arsip
          </Link>
        </li>
        <li>
          <ToggleTheme />
        </li>
        <li className="nav-item">
          <button onClick={logout}>
            <FiLogOut />
          </button>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Navbar;
