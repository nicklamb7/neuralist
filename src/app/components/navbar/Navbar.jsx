import React from 'react';
import './Navbar.scss';

function Navbar() {
  const appName = 'NeuraLink';
  return (
    <div className="navbar">
      <div className="navbar__left-section">
        <div className="navbar__logo-wrapper">
          <h2 className="logo">{appName}</h2>
        </div>
        <div className="search-bar">
          <form action="">
            <input type="text" />
          </form>
        </div>
      </div>
      <div className="navbar__right-section">
        <div className="navbar__login">
          <button className="login-btn">
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
