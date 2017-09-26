import React from 'react';
import Main from '../components/layout/Main';

// images
import gif1 from '../components/img/dtgif/gif1.gif';
import gif2 from '../components/img/dtgif/gif2.gif';
import gif3 from '../components/img/dtgif/gif3.gif';
import gif4 from '../components/img/dtgif/gif4.gif';

const imgStyle = {
  width: '100%',
  marginBottom: '3rem',
};

const Tutorial = () => (
  <div>
    <h2>Firefox DevTools</h2>

    <p>
      Designers and developers are rapidly falling in love with CSS Grid Layout. That’s why Mozilla
      has been working hard on the Firefox Developer Tools Layout panel, adding powerful upgrades to
      the CSS Grid Inspector and Box Model.
    </p>

    <h3 className="mt3">CSS Grid Overlay</h3>
    <p>
      The new CSS Layout panel lists all the available CSS Grid containers on the page and includes an
      overlay to help you visualize the grid itself. You can customize the information displayed on
      the overlay, including grid line numbers and dimensions.
    </p>
    <img style={imgStyle} src={gif1} alt="enable grid overlay on a grid" />

    <h3>Interactive grid</h3>
    <p>
      There is a new interactive grid outline in the sidebar. Mouse over the outline to highlight
      parts of the grid on the pages and display size, area, and position information.
    </p>
    <img style={imgStyle} src={gif2} alt="grid outline" />

    <h3>Display grid area</h3>
    <p>
      The new “Display grid areas” setting shows the bounding areas and the associated area name in
      every cell. We'll learn more about how to set a grid area name in a bit.
    </p>
    <img style={imgStyle} src={gif3} alt="grid area" />

    <h3>Visualize transformations</h3>
    <p>
      The Grid Inspector is capable of visualizing transformations applied to the grid container.
      This lets you accurately see where the grid lines are on the page for any grids that
      are translated, skewed, rotated, or scaled.
    </p>
    <img style={imgStyle} src={gif4} alt="grid transition" />

    <p className="mb4">
      These features and improvements are currently available in Firefox Nightly and Firefox
      Developer edition. It is recommended that you download and install one of these browsers
      before continuing. These features are only available in Firefox and will help you as you learn
      about the ins and outs of CSS Grid Layout.
    </p>

    <a
      href="https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="button-download">Download Firefox Nightly</button>
    </a>
    <a href="https://www.mozilla.org/firefox/developer/" target="_blank" rel="noopener noreferrer">
      <button className="button-download">Download Firefox Developer Edition</button>
    </a>
  </div>
);

export default () => <Main currentPageNum={3} tutorial={<Tutorial />} />;
