import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// data
import pageData from '../../../data/css-grid';

// images
import facebook from './img/fb.png';

// Components
import Side from '../../../components/layout/Side';
import BottomNav from '../../../components/layout/BottomNav';
import Hero from '../../../components/layout/Hero';

const Main = ({ currentPageNum, tutorial, homework }) => {
  // Get current page data from data/pageData.js
  const currentPageData = pageData.find(page => page.order === currentPageNum);
  return (
    <div>
      <Helmet>
        <title>{`CSS Grid PlayGround | ${currentPageData.title} | Mozilla`}</title>
        <meta
          name="description"
          content="Learn about CSS Grid Layout and Firefox's CSS Grid Layout Tools."
        />
        <meta property="og:url" content="https://mozilladevelopers.github.io/playground" />
        <meta property="og:title" content="CSS Grid Layout + Firefox = ❤️" />
        <meta
          property="og:description"
          content="CSS Grid Layout is a game-changer for web developers. Learn more about CSS Grid and the CSS Grid Layout panel in Firefox."
        />
        <meta property="og:image" content={facebook} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mozilla" />
        <meta name="twitter:creator" content="@mozilla" />
        <meta name="twitter:title" content="CSS Grid Layout + Firefox = ❤️" />
        <meta
          name="twitter:description"
          content="CSS Grid Layout is a game-changer for web developers. Learn more about CSS Grid and the CSS Grid Layout panel in Firefox."
        />
        <meta name="twitter:image" content="https://i.imgur.com/NLUqs7J.png" />
      </Helmet>

      <Hero>
        <h3>Firefox DevTools</h3>
        <h1>Introduction to CSS Grid Layout</h1>
      </Hero>
      <div className="main">
        <div className="container">
          <Side currentPageNum={currentPageNum} pageData={pageData} />
          <div className="content">{tutorial}</div>
        </div>
        {homework ? <div>{homework}</div> : ''}
      </div>
      <BottomNav currentPageNum={currentPageNum} pageData={pageData} />
    </div>
  );
};

Main.propTypes = {
  tutorial: PropTypes.node.isRequired,
  homework: PropTypes.node,
  currentPageNum: PropTypes.number.isRequired,
};

Main.defaultProps = {
  homework: '',
};

export default Main;
