import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';
import CodepenLink from '../components/CodepenLink';

const Tutorial = () => (
  <div>
    <h2>Creating a Basic Layout</h2>

    <p>
      Now that we have learned how to create a grid and position items on that grid, let's create a
      basic layout. We won't be introducing any new concepts here. We'll simply be using the
      <code>grid-row</code> and <code>grid-column</code> shorthand properties to manually place
      items such as a header, footer, and so on.
    </p>

    <p>Here is the HTML:</p>

    <CodeBlock>
      {`
<div class="container">
  <div class="header">header</div>
  <div class="sidebar">sidebar</div>
  <div class="content-1">Content-1</div>
  <div class="content-2">Content-2</div>
  <div class="content-3">Content-3</div>
  <div class="footer">footer</div>
</div>
      `}
    </CodeBlock>

    <p>Here is the CSS:</p>

    <CodeBlock>
      {`
.main {
  display: grid;
  width: 750px;
  height: 600px;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 80px 1fr 1fr 100px;
  grid-gap: 1rem;
}

.header {
  grid-row: 1 / 2;
  grid-column: 1 / 4;
}

.sidebar {
  grid-row: 2 / 4;
  grid-column: 1 / 2;
}

.content-1 {
  grid-row: 2 / 3;
  grid-column: 2 / 4;
}

.content-2 {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
}

.content-3 {
  grid-row: 3 / 4;
  grid-column: 3 / 4;
}

.footer {
  grid-row: 4 / 5;
  grid-column: 1 / 4;
}
      `}
    </CodeBlock>

    <p>Here is the result:</p>

    <div className="container-7">
      <div className="item header-7">header</div>
      <div className="item sidebar-7">sidebar</div>
      <div className="item content-1-7">Content-1</div>
      <div className="item content-2-7">Content-2</div>
      <div className="item content-3-7">Content-3</div>
      <div className="item footer-7">footer</div>
    </div>

    <CodepenLink link="https://codepen.io/mozilladevelopers/pen/GMjwvG" />

  </div>
);

const Homework = () => (
  <DevHomework>
    <p>
      This is the perfect time to test out the 'display line numbers' setting on the Firefox CSS
      Grid Layout Panel. Inspect the result above and select the layout panel. Here you can activate
      the overlay grid and check the box to 'display line numbers'. Handy right? This tool makes it
      very easy to visualize your grid when positioning items. Don't have Firefox?{' '}
      <a href="https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly">
        Download Firefox Nightly
      </a>.
    </p>
  </DevHomework>
);

export default () => <Main currentPageNum={7} tutorial={<Tutorial />} homework={<Homework />} />;
