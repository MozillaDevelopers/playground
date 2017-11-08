import React from 'react';

// components
import TutorialItem from '../components/TutorialItem';

// photos
import cssgridPhoto from '../components/img/cssgrid.png';
import debuggerPhoto from '../components/img/debugger.png';

const TutorialList = () => (
  <div className="tutorial-list">
    <div className="container">
      <TutorialItem
        photo={cssgridPhoto}
        title="CSS Grid"
        desc="CSS Grid Layout is completely changing the game for web design. Learn about CSS Grid Layout and the Firefox DevTools layout panel"
        link="/css-grid"
      />
      <TutorialItem
        photo={debuggerPhoto}
        title="Debugger"
        desc="Still using console.log for debugging JavaScript? There is a better way! Learn about how to use Firefox Debugger to debug and fix your code."
        link="/debugger"
      />
    </div>
  </div>
);

export default TutorialList;
