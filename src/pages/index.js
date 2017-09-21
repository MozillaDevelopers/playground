import React from 'react';
import Main from '../components/layout/Main';

// components
import Term from '../components/Term';

// images
import line from '../components/img/terms/line.svg';
import cell from '../components/img/terms/cell.svg';
import area from '../components/img/terms/area.svg';
import column from '../components/img/terms/column.svg';
import gutter from '../components/img/terms/gutter.svg';
import row from '../components/img/terms/row.svg';

const Tutorial = () => (
  <div>
    <h2>Terminology</h2>

    <p className="mb4">
      Before we dive into CSS Grid concepts, let’s cover some basic terminology.
    </p>

    <Term img={line} name="Grid lines">
      The vertical and horizontal lines that divide the grid and separate the columns and rows.
    </Term>

    <Term img={cell} name="Grid cell">
      A single unit of a CSS grid.
    </Term>

    <Term img={area} name="Grid area">
      Rectangular space surrounded by four grid lines. A grid area can contain any number of grid
      cells.
    </Term>

    <Term img={column} name="Grid track">
      The space between two grid lines. This space can be horizontal or vertical
    </Term>

    <Term img={row} name="Grid row">
      A horizontal track of a grid.
    </Term>

    <Term img={column} name="Grid column">
      A vertical track of a grid.
    </Term>

    <Term img={gutter} name="Gutter">
      The space between rows and columns in a grid.
    </Term>

    <span className="term__name">Grid container</span>
    <p>
      The container that holds the entire CSS grid. It will be the element that has the
      <code>display: grid</code> or <code>display: inline-grid</code> property on it.
    </p>

    <span className="term__name">Grid item</span>
    <p className="mb4">Any element that is a direct child of a grid container.</p>

    <p>Got it? Let's move on to creating our first grid with CSS Grid Layout.</p>
  </div>
);

export default () => <Main currentPageNum={1} tutorial={<Tutorial />} />;
