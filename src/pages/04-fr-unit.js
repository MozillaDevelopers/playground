import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';

const Tutorial = () => (
  <div>
    <h2>The fr Unit</h2>

    <p>
      In our first grid, we created columns with a fixed px width. That's great, but it isn't very
      flexible. Thankfully, CSS Grid Layout introduces a new unit of length called fr (short for
      fraction). MDN defines the fr unit as a unit which "represents a fraction of the available
      space in the grid container". Say we want to create rewrite our previous grid to be 800px wide
      with three equal-width columns. We could write our CSS:
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

    <h4>repeat() notation</h4>

    <p>
      A handy tip if you find yourself repeating length units, is to use the repeat() notation. The
      above code could be rewritten like so:
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

    <p>This provides us with the following result:</p>

    <div className="container-4">
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
    </div>
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>this is some homework</p>
  </DevHomework>
);

export default () => <Main currentPageNum={4} tutorial={<Tutorial />} homework={<Homework />} />;
