import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';
import CodepenLink from '../components/CodepenLink';

const Tutorial = () => (
  <div>
    <h2>Mixing Units</h2>

    <p>
      When declaring track sizes, you can use fixed sizes with units such as px and em. You can also
      use flexible sizes such as percentages or the fr unit. The real magic of CSS Grid Layout,
      however, is the ability to mix these units. The best way to understand is with an example:
    </p>
    <CodeBlock>
      {`
.container {
  width: 100%;
  display: grid;
  grid-template-columns: 100px 30% 1fr;
  grid-template-rows: 200px 100px;
  grid-gap: 1rem;
}
    
      `}
    </CodeBlock>

    <p>
      Here, we have declared a grid with three columns. The first column is a fixed width of 100px.
      The second column will occupy 30% of the available space, and the third column is 1fr which
      means it will take up a fraction of the available space. In this case, it will take up all of
      the remaining space (1/1).
    </p>

    <p>Here is our HTML:</p>

    <CodeBlock>
      {`
<div class="container">
  <div class="item" />
  <div class="item" />
  <div class="item" />
  <div class="item" />
  <div class="item" />
  <div class="item" />
</div>
      `}
    </CodeBlock>

    <p>Here is the result:</p>

    <div className="container-5">
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
    </div>

    <CodepenLink link="https://codepen.io/mozilladevelopers/pen/JrReJE" />

  </div>
);

const Homework = () => (
  <DevHomework>
    <p>
      Inspect the grid above, and change the <code>grid-template-columns</code> property to the
      following:
    </p>
    <CodeBlock>
      {`
grid-template-columns: 100px 30% 2fr 1fr;
      `}
    </CodeBlock>

    <p>
      Do you see what happened? Instead of 3 columns, you now have a 3rd column that is{' '}
      <code>2fr</code> and occupies 2/3 of the remaining space, and a 4th column that is{' '}
      <code>1fr</code> and occupies the final 1/3 of the remaining space. Continue to play around in
      Firefox DevTools and try different units and combinations.
    </p>

    <p>When you are ready, continue on to learn about how to position items on the grid.</p>
  </DevHomework>
);

export default () => <Main currentPageNum={5} tutorial={<Tutorial />} homework={<Homework />} />;
