import React from 'react';

// Components
import DownloadWhite from '../../components/DownloadWhite';

const CTA = () => (
  <div className="cta">
    <div className="container">
      <div className="cta__content">
        <div className="cta__logo">
          <img src="http://placehold.it/200x200" alt="Firefox Developer Edition Logo" />
        </div>
        <span className="cta__text">Get the browser with the best tools for Developers</span>
        <div className="cta__download">
          <DownloadWhite />
        </div>
      </div>
    </div>
  </div>
);


export default CTA;
