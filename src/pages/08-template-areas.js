import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';

const Tutorial = () => (
  <div>
    <h2>Template Areas</h2>
    <p>
      In our previous example, we learned how to create a basic layout by positioning items with
      grid lines. Another method for positioning items is to use named grid areas with the{' '}
      <code>grid-template-areas</code> and <code>grid-area</code> properties. The best way to
      explain this is with example. Let's recreate the grid from our previous example with the
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
      Here we have defined 3 columns and 4 rows. Instead of placing each individual item, we can
      define the entire layout using the <code>grid-template-areas</code> property. We can then
      assign those areas to each of our grid items using the <code>grid-area</code> property.
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
    <p>And here is the result:</p>
    <div className="container-8">
      <div className="item header-8">header</div>
      <div className="item sidebar-8">sidebar</div>
      <div className="item content-1-8">Content-1</div>
      <div className="item content-2-8">Content-2</div>
      <div className="item content-3-8">Content-3</div>
      <div className="item footer-8">footer</div>
    </div>
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>this is some homework</p>
  </DevHomework>
);

export default () => <Main currentPageNum={8} tutorial={<Tutorial />} homework={<Homework />} />;
