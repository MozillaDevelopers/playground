import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';
import CodepenLink from '../components/CodepenLink';

// images
import numbers from '../components/img/terms/numbers.svg';
import grid from '../components/img/terms/grid.svg';

const style = {
  width: '100%',
  margin: '1.5rem 0',
};

// images

const Tutorial = () => (
  <div>
    <h2>Position Items</h2>

    <h4>Understanding grid lines</h4>

    <p>
      Now that we are comfortable creating a grid and defining the row and column sizes, we can move
      on to placing items on this grid. There are several ways to place items, but we will start
      with a basic example. Consider a simple 3x2 grid:
    </p>

    <img style={style} src={grid} alt="a 3x2 grid" />

    <p>Each item within this grid will be placed automatically in the default order.</p>

    <p>
      If we wish to have greater control, we can position items on the grid using grid line numbers.
      Grid lines are numbered left to right and top to bottom (if you are working in a right-to-left
      language, then grid lines are numbered right to left). The above example would be numbered
      like so:
    </p>

    <img style={style} src={numbers} alt="a 3x2 grid with numbers" />

    <h4>Position an item</h4>

    <p>Here is the HTML we will be using for this example:</p>

    <CodeBlock>
      {`
<div class="container-6">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
  <div class="item item6">6</div>
</div>
      `}
    </CodeBlock>

    <p>
      Say we want to position our first grid item (with a class of item1) to be in the second row
      and occupy the second column. This item will need to start at the second row line, and span to
      the third row line. It will also need to start at the second column line and span to the third
      column line. We could write our CSS like so:
    </p>

    <CodeBlock>
      {`
.item1 {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
}
      `}
    </CodeBlock>

    <h4>Shorthand property</h4>

    <p>We can also rewrite this with shorthand properties:</p>

    <CodeBlock>
      {`
.item1 {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
}
      `}
    </CodeBlock>

    <p>Here is the result:</p>

    <div className="container-6">
      <div className="item item1">1</div>
      <div className="item item2">2</div>
      <div className="item item3">3</div>
      <div className="item item4">4</div>
      <div className="item item5">5</div>
      <div className="item item5">6</div>
    </div>

    <CodepenLink link="https://codepen.io/mozilladevelopers/pen/veXQZp" />

  </div>
);

const Homework = () => (
  <DevHomework>
    <p>
      Try changing the <code>grid-row</code> property of item1 to the following:
    </p>
    <CodeBlock>
      {`
.item1 {
  grid-row: 3 / 4;
  grid-column: 1 / 3;
}
      `}
    </CodeBlock>
    <p>
      See what happened? The item spanned multiple columns from grid line 1 to 3. It also was placed
      between grid row lines 3 and 4 which results in a new row being created. This new row is an
      implicit row, and its height is set by the <code>grid-auto-rows</code> property on the parent
      grid. You can learn more about default rules for auto-placement on{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout#Default_rules_for_auto-placement"
      >
        MDN
      </a>.
    </p>

    <p>Now let's put this new knowledge to work by creating a basic layout.</p>
  </DevHomework>
);

export default () => <Main currentPageNum={6} tutorial={<Tutorial />} homework={<Homework />} />;
