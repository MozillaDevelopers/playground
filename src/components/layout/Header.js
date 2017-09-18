import React from 'react';
import logo from '../img/logo.svg'

const Header = () => (
  <header className="header">
    <div className="contain">
      <img alt="logo" className="header__logo" src={logo} />
      <button className="header__cta">Download Firefox</button>
    </div>
  </header>
);

export default Header;
