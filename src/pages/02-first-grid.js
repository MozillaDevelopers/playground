import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';
import CodepenLink from '../components/CodepenLink';

const Tutorial = () => (
  <div>
    <h2>Your First Grid</h2>

    <h4>Create a grid</h4>
    <p>
      The first thing we want to do is create a grid container. We can do this by declaring{' '}
      <code>display: grid</code> on the container element. In this example we are using a div with
      the class of <code>container</code>.
    </p>

    <h4>Define rows and columns</h4>
    <p>
      There are several ways to define rows and columns. For our first grid, we will use properties
      <code>grid-template-columns</code> and <code>grid-template-rows</code>. These properties allow
      us to define the size of the rows and columns for our grid. To create three fixed-height rows
      of 150px and three fixed-width columns of 150px, simply write:
    </p>

    <CodeBlock>
      {`
grid-template-columns: 150px 150px 150px;
grid-template-rows: 150px 150px;
      `}
    </CodeBlock>

    <p>To add a fourth column that is 70px wide, write:</p>

    <CodeBlock>
      {`
grid-template-columns: 150px 150px 70px;
      `}
    </CodeBlock>

    <p>...and so on to add more columns.</p>

    <h4>Add a gutter</h4>

    <p>Adding a gutter to your grid is amazingly easy with CSS Grid Layout. Simply add:</p>

    <CodeBlock>
      {`
grid-gap: 1rem;
      `}
    </CodeBlock>

    <p>
      That simple line gives you an equal-sized gutter between all rows and columns. To define the
      gutter size for columns and rows individually, you can use the <code>grid-column-gap</code>{' '}
      and <code>grid-row-gap</code> properties instead.
    </p>

    <p>Now let's put that all together. Here is our HTML:</p>

    <CodeBlock>
      {`
<div class="container">
  <div class="item item1"></div>
  <div class="item item2"></div>
  <div class="item item3"></div>
  <div class="item item4"></div>
  <div class="item item5"></div>
  <div class="item item5"></div>
</div>
      `}
    </CodeBlock>

    <p>With just a few lines of CSS, we can create a simple grid:</p>

    <CodeBlock>
      {`
.container {
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-template-rows: 150px 150px;
  grid-gap: 1rem;
}
      `}
    </CodeBlock>
    <p>Here is the result:</p>

    <div className="container-2">
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
    </div>

    <CodepenLink link="https://codepen.io/mozilladevelopers/pen/veXQmp" />
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>
      Amazing right? Inspect the grid above with your browser's developer tools. Try changing the
      column width, or the row height. Swap out the <code>grid-gap</code> property with the
      <code>grid-column-gap</code> and <code>grid-row-gap</code> properties and play around with
      different widths and heights.
    </p>

    <p>
      Having a good set of developer tools when working with CSS Grid Layout is essential. Firefox
      has some fantastic features that are specifically built to help you create and design grids.
      Intrigued?{' '}
      <a href="https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly">
        Download Firefox Nightly
      </a>{' '}
      to get the browser with the best CSS Grid Layout tools.
    </p>

    <p>Click to the next section to learn about Firefox's new CSS Grid Layout panel.</p>
  </DevHomework>
);

export default () => <Main currentPageNum={2} tutorial={<Tutorial />} homework={<Homework />} />;
