import React from 'react';
import Main from '../components/layout/Main';
import DevHomework from '../components/layout/DevHomework';
import DownloadButton from '../components/DownloadButton';

const Tutorial = () => (
  <div>
    <h2>Learn More</h2>

    <p>
      Hopefully, this short tutorial series has provided you with the knowledge you need to start
      experimenting and building with CSS Grid Layout. CSS Grid Layout is powerful, and we only
      scratched the surface of what is possible.
    </p>

    <p>If you are ready to dive deeper and learn more, here are a ton of great resources to explore.</p>

    <h4>Jen Simmons</h4>
    <p>
      Jen Simmons is a Designer Advocate at Mozilla. She is also a developer, writer, and speaker and is a member of the CSS Working Group.
    </p>
    <ul className="list">
      <li>
        <a href="http://jensimmons.com">jensimmons.com</a>
      </li>
      <li>
        <a href="https://twitter.com/jensimmons">twitter</a>
      </li>
    </ul>

    <h4>Rachel Andrew</h4>
    <p>
      Rachel Andrew is a developer, speaker, and author. She is a member of the CSS Working Group and develops resources for learning about CSS Grid Layout.
    </p>
    <ul className="list">
      <li>
        <a href="https://gridbyexample.com/">gridbyexample.com</a>
      </li>
      <li>
        <a href="https://twitter.com/rachelandrew">twitter</a>
      </li>
    </ul>

    <h4>MDN</h4>
    <p>MDN has comprehensive tutorials and documentation for every feature of CSS Grid Layout</p>
    <ul className="list">
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">MDN</a>
      </li>
    </ul>
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>
      Ready to be on the cutting edge? Firefox is constantly adding new features and tools that help
      developers build for the open web.
    </p>
    <strong>Firefox Developer Edition</strong>
    <p>Build, test, scale and more with the only browser built just for developers.</p>
    <div>
      <DownloadButton
        url="https://www.mozilla.org/firefox/developer/"
        className="mb4"
      >
        Get Firefox Developer Edition
      </DownloadButton>
    </div>

    <h4>Firefox Nightly</h4>
    <p>Get a sneak peek at the future. Firefox nightly has daily updates and provides access to new features and tools before they are released.</p>
    <DownloadButton url="https://www.mozilla.org/firefox/channel/desktop/#nightly" className="mb4">
      Get Firefox Developer Edition
    </DownloadButton>
  </DevHomework>
);

export default () => <Main currentPageNum={10} tutorial={<Tutorial />} homework={<Homework />} />;
