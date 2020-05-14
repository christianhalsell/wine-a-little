import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo" to="/">
      Wine a Little
    </Link>

    <nav className="navigation">
      <Link className="option" to="/shop">Shop</Link>
      <Link className="option" to="/contact">Contact</Link>
      {
        currentUser ?
          <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
          :
          <Link className="option" to="/signin">Sign In</Link>
      }
    </nav>
  </div>
);

export default Header;