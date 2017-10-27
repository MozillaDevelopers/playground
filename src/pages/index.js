import React from 'react';

// components
import Hero from '../components/layout/Hero';
import TutorialItem from '../components/TutorialItem';
import DownloadWhite from '../components/DownloadWhite';

// photos
import cssgridPhoto from './img/cssgrid.png';
import debuggerPhoto from './img/debugger.png';
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
    <div className="tutorial-list">
      {/* <h2 className="tutorial-list__title">Explore DevTools Playground</h2> */}
      <div className="container">
        <TutorialItem
          photo={cssgridPhoto}
          title="CSS Grid"
          desc="Climb leg lick the plastic bag hide when guests come over, yet meowing non stop for food i can haz, or spend all night ensuring people don't sleep sleep all day thug cat."
          link="/css-grid"
        />
        <TutorialItem
          photo={debuggerPhoto}
          title="Debugger"
          desc="Climb leg lick the plastic bag hide when guests come over, yet meowing non stop for food i can haz, or spend all night ensuring people don't sleep sleep all day thug cat."
          link="/debugger"
        />
      </div>
    </div>
  </div>
);

export default index;
