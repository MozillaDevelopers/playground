import React from 'react';

// components
import Hero from '../components/layout/Hero';
import DownloadWhite from '../components/DownloadWhite';
import TutorialList from '../components/TutorialList';
import DownloadLink from '../components/DownloadLink';

// photos
import logo from '../components/img/ff-logo.png';

const logoStyle = {
  width: '80px',
};
const index = () => (
  <div>
    <Hero>
      <img className="mb6" style={logoStyle} src={logo} alt="logo" />
      <h1>Firefox DevTools Playground</h1>
      <div className="container">
        <div className="col-md-6 col-md-offset-3 mt3">
          <p className="mb6">
            Learn, build, improve, and create with Firefox DevTools.
          </p>
          <DownloadLink content="index-hero">
            <DownloadWhite />
          </DownloadLink>
        </div>
      </div>
    </Hero>
    <TutorialList />
  </div>
);

export default index;
