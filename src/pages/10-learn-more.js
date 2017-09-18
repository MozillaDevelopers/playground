import React from 'react';
import Main from '../components/layout/Main';
import DevHomework from '../components/layout/DevHomework';

const Tutorial = () => (
  <div>
    <h2>Learn More</h2>

    <p>
      Hopefully, this short tutorial series has provided you with the knowledge you need to start
      experimenting and building with CSS Grid Layout. CSS Grid Layout is powerful, and we only
      scratched the surface of what is possible.
    </p>

    <p>If you are ready to dive deeper and learn more, there are a ton of great resources:</p>

    <h5>Jen Simmons</h5>
    <p>
      Jen Simmons is a Designer Advocate at Mozilla. She is also a developer, writer, speaker, and
      is a part of the CSS Working Group.
    </p>
    <ul>
      <li>
        <a href="http://jensimmons.com">jensimmons.com</a>
      </li>
      <li>
        <a href="https://twitter.com/jensimmons">twitter</a>
      </li>
    </ul>

    <h5>Rachel Andrew</h5>
    <p>
      Rachel Andrew is a developer, speaker and author who is also a part of the CSS Working Group
      and has provided several resources for learning about CSS Grid Layout.
    </p>
    <ul>
      <li>
        <a href="https://gridbyexample.com/">gridbyexample.com</a>
      </li>
      <li>
        <a href="https://twitter.com/rachelandrew">twitter</a>
      </li>
    </ul>

    <h5>MDN</h5>
    <p>MDN has comprehensive tutorials and documentation for every feature of CSS Grid Layout</p>
    <ul>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">MDN</a>
      </li>
    </ul>
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>this is some homework</p>
  </DevHomework>
);

export default () => <Main currentPageNum={10} tutorial={<Tutorial />} homework={<Homework />} />;
