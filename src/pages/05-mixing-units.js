import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';

const Tutorial = () => (
  <div>
    <h2>Mixing Units</h2>

    <p>
      When declaring track sizes, you can use fixed sizes with units such as px and em. You can also
      use flexible sizes such as percentages or the fr unit. The real magic of CSS Grid Layout,
      however, is having the ability to mix these units. The best way to understand is with an
      example:
    </p>
    <CodeBlock>
      {`
.container {
  width: 800px;
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
      the remaining space (1/1). Here is the result:
    </p>

    <div className="container-5">
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

export default () => <Main currentPageNum={5} tutorial={<Tutorial />} homework={<Homework />} />;
