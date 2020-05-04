import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo" to="/">
      Wine a Little
    </Link>

    <nav className="navigation">
      <Link className="option" to="/shop">Shop</Link>
      <Link className="option" to="/contact">Contact</Link>
    </nav>
  </div>
);

export default Header;