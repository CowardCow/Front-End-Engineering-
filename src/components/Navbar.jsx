import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Products
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar