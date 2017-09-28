import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';
import CodepenLink from '../components/CodepenLink';

const Tutorial = () => (
  <div>
    <h2>Named Lines</h2>

    <p>
      In a previous example, we learned how to place an item on the grid by providing the {' '}
      <code>grid-column</code> and <code>grid-row</code> properties with specific grid lines. We can
      also name some or all of those grid lines when defining a grid. This allows us to use those
      names instead of grid lines. To name a grid line, simply add the name in square brackets:
    </p>

    <p>To name a grid line, we simply provide the name in square brackets:</p>

    <CodeBlock>
      {`
.container {
  display: grid;
  width: 100%;
  height: 600px;
  grid-gap: 1rem;
  grid-template-columns:
    [main-start sidebar-start] 200px
    [sidebar-end content-start] 1fr
    [column3-start] 1fr
    [content-end main-end];
  grid-template-rows:
    [row1-start] 80px
    [row2-start] 1fr
    [row3-start] 1fr
    [row4-start] 100px
    [row4-end];
}
      `}
    </CodeBlock>

    <p>
      Now that we have line names, we can use those names when placing items. Let's recreate our
      basic layout using named lines, instead of line numbers:
    </p>

    <CodeBlock>
      {`
.header {
  grid-column: main-start / main-end;
  grid-row: row1-start / row2-start;
}

.sidebar {
  grid-column: sidebar-start / sidebar-end;
  grid-row: row2-start / row4-start;
}

.content-1 {
  grid-column: content-start / content-end;
  grid-row: row2-start / row3-start;
}

.content-2 {
  grid-column: content-start / column3-start;
  grid-row: row3-start / row4-start;
}

.content-3 {
  grid-column: column3-start / content-end;
  grid-row: row3-start / row4-start;
}

.footer {
  grid-column: main-start / main-end;
  grid-row: row4-start / row4-end;
}
      `}
    </CodeBlock>

    <p>Here is our HTML:</p>

    <CodeBlock>
      {`
<div class="container">
  <div class="item header">header</div>
  <div class="item sidebar">sidebar</div>
  <div class="item content-1">Content-1</div>
  <div class="item content-2">Content-2</div>
  <div class="item content-3">Content-3</div>
  <div class="item footer">footer</div>
</div>
      `}
    </CodeBlock>

    <p>Here is the result:</p>

    <div className="container-9">
      <div className="item header-9">header</div>
      <div className="item sidebar-9">sidebar</div>
      <div className="item content-1-9">Content-1</div>
      <div className="item content-2-9">Content-2</div>
      <div className="item content-3-9">Content-3</div>
      <div className="item footer-9">footer</div>
    </div>
    <CodepenLink link="https://codepen.io/mozilladevelopers/pen/dVpQVV" />
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>
      Did you know you can customize the color of the grid overlay in Firefox DevTools? The above
      example is on a white background, and the default purple may not be the best color to use.
      When selecting an overlay grid to display, you will see a circle next to the grid name that
      indicates the color of the overlay. Click on that circle, and you can customize the color to
      whatever you'd like. Try a different color, such as red. Don't have Firefox?{' '}
      <a href="https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly">
        Download Firefox Nightly
      </a>.
    </p>
  </DevHomework>
);

export default () => <Main currentPageNum={9} tutorial={<Tutorial />} homework={<Homework />} />;
