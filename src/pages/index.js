import React from 'react';

// components
import Hero from '../components/layout/Hero';
import DownloadWhite from '../components/DownloadWhite';
import TutorialList from '../components/TutorialList';

// photos
import logo from '../components/img/ff-logo.png';

const logoStyle = {
  width: '80px',
}
const index = () => (
  <div>
    <Hero>
      <img className="mb6" style={logoStyle} src={logo} alt="logo" />
      <h1>Firefox DevTools Playground</h1>
      <div className="container">
        <div className="col-md-6 col-md-offset-3 mt3">
          <p className="mb6">
            With tail in the air paw at your fat belly make meme, make cute face. I can haz fall asleep
            on the washing machine so flop over make muffins, but see owner, run in terror. Gate keepers
            of hell demand to be let outside at once.
          </p>
          <DownloadWhite />


        </div>
      </div>
    </Hero>
    <TutorialList />
  </div>
);

export default index;
