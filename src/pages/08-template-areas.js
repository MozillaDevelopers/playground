import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';
import CodepenLink from '../components/CodepenLink';

const Tutorial = () => (
  <div>
    <h2>Template Areas</h2>
    <p>
      In our previous example, we learned how to create a basic layout by positioning items with
      grid lines. Another method for positioning items is to use named grid areas with the{' '}
      <code>grid-template-areas</code> and <code>grid-area</code> properties. The best way to
      explain this is with an example. Let's recreate the grid from our previous example with the
      grid-template-areas property:
    </p>
    <CodeBlock>
      {`
.container {
  display: grid;
  width: 100%;
  height: 600px;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 80px 1fr 1fr 100px;
  grid-gap: 1rem;
  grid-template-areas:
      "header header header"
      "sidebar content-1 content-1"
      "sidebar content-2 content-3"
      "footer footer footer";
}
      `}
    </CodeBlock>
    <p>
      Here we have defined three columns and four rows. Instead of placing each individual item, we
      can define the entire layout using the <code>grid-template-areas</code> property. We can then
      assign those areas to each grid item using the <code>grid-area</code> property.
    </p>
    <p>Our HTML:</p>
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
    The rest of our CSS:
    <CodeBlock>
      {`
.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content-1 {
  grid-area: content-1;
}

.content-2 {
  grid-area: content-2;
}

.content-3 {
  grid-area: content-3;
}

.footer {
  grid-area: footer;
}
      `}
    </CodeBlock>
    <p>Here is the result:</p>
    <div className="container-8">
      <div className="item header-8">header</div>
      <div className="item sidebar-8">sidebar</div>
      <div className="item content-1-8">Content-1</div>
      <div className="item content-2-8">Content-2</div>
      <div className="item content-3-8">Content-3</div>
      <div className="item footer-8">footer</div>
    </div>

    <CodepenLink link="https://codepen.io/mozilladevelopers/pen/Xejyed" />
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>
      Did you know that FireFox DevTools can display the area names? Try it out! Inspect the grid
      above and open the layout panel. From here you can toggle the overlay grid and the 'Display
      Area Names' feature. Don't have Firefox?{' '}
      <a href="https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly">
        Download Firefox Nightly
      </a>.
    </p>
  </DevHomework>
);

export default () => <Main currentPageNum={8} tutorial={<Tutorial />} homework={<Homework />} />;
