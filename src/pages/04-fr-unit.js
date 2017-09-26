import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';
import CodepenLink from '../components/CodepenLink';

const Tutorial = () => (
  <div>
    <h2>The fr Unit</h2>

    <p>
      In our first grid, we created columns with a fixed px width. That's great, but it isn't very
      flexible. Thankfully, CSS Grid Layout introduces a new unit of length called fr, which is
      short for “fraction”. MDN defines the fr unit as a unit which represents a fraction of the
      available space in the grid container. If we want to rewrite our previous grid to have three
      equal-width columns, we could change our CSS to use the fr unit:
    </p>

    <CodeBlock>
      {`
.container {
  display: grid;
  width: 800px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 150px 150px;
  grid-gap: 1rem;
}
      `}
    </CodeBlock>

    <h4>The repeat() notation</h4>

    <p>
      Handy tip: If you find yourself repeating length units, use the repeat() notation. Rewrite the
      above code like so:
    </p>

    <CodeBlock>
      {`      
.container {
  display: grid;
  width: 800px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 150px);
  grid-gap: 1rem;
}
      `}
    </CodeBlock>

    <p>Here is the result:</p>

    <div className="container-4">
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
    </div>

    <CodepenLink link="https://codepen.io/mozilladevelopers/pen/eGdQRN" />

  </div>
);

const Homework = () => (
  <DevHomework>
    <p>
      Inspect the above grid and change the <code>grid-template-columns</code> property on the grid
      container to the following:
    </p>

    <CodeBlock>
      {`
grid-template-columns: 10px repeat(2, 1fr);
      `}
    </CodeBlock>
    <p>
      What happened? As you can see, you can not only use the repeat() notation for just part of the
      track listing, but you can also mix units (in this case, px and fr).
    </p>

    <p>We will learn more about mixing units in the next section.</p>
  </DevHomework>
);

export default () => <Main currentPageNum={4} tutorial={<Tutorial />} homework={<Homework />} />;
