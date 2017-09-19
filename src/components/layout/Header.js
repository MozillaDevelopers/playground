import React from 'react';
import logo from '../img/logo.svg';

// components
import DownloadButton from '../../components/DownloadButton';

const Header = () => (
  <header className="header">
    <div className="contain">
      <a href="/">
        <img alt="logo" className="header__logo" src={logo} />
      </a>

      <DownloadButton float="right" url="https://www.mozilla.org/firefox/channel/desktop/#nightly">Download Firefox</DownloadButton>

    </div>
  </header>
);

export default Header;
