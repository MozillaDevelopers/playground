import React from 'react';

import logo from '../img/ff-logo.png';

export default ({ children }) => (
  <div className="homework">
    <div className="contain">
      <img className="homework__logo" alt="Firefox Logo" src={logo} />
      <h2 className="homework__title">Firefox DevTools + CSS Grid Layout</h2>
      <div className="row">
        <div className="homework__content">
          {children}
        </div>
      </div>
    </div>
  </div>
);
