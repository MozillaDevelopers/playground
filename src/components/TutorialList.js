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
);

export default TutorialList;
