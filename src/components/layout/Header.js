import React from 'react';
import Link from 'gatsby-link';

// images
import logo from '../img/logo.svg';

// components
import DownloadButton from '../../components/DownloadButton';

const Header = () => (
  <header className="header">
    <div className="contain">
      <Link to='/'>
        <img alt="logo" className="header__logo" src={logo} />
      </Link>

      <DownloadButton float="right" url="https://www.mozilla.org/firefox/channel/desktop/#nightly">Download Firefox</DownloadButton>

    </div>
  </header>
);

export default Header;
