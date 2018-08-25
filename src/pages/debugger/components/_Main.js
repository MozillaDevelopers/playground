import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// data
import pageData from '../../../data/debugger';

// images
import facebook from './img/fb.png';

// Components
import Layout from '../../../components/Layout';
import Side from '../../../components/layout/Side';
import BottomNav from '../../../components/layout/BottomNav';
import Hero from '../../../components/layout/Hero';

const Main = ({ currentPageNum, tutorial, homework }) => {
  // Get current page data from data/pageData.js
  const currentPageData = pageData.find(page => page.order === currentPageNum);
  return (
    <Layout>
      <Helmet>
        <title>{`Debugger PlayGround | ${currentPageData.title} | Mozilla`}</title>
        <meta
          name="description"
          content="Learn how to use the Firefox Debugger to find and fix bugs."
        />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://mozilladevelopers.github.io/playground/debugger" />
        <meta property="og:title" content="Go beyond console.log!" />
        <meta
          property="og:description"
          content="Still using console.log for debugging JavaScript? There is a better way! Learn how to use Firefox Debugger to debug and fix your code."
        />
        <meta property="og:image" content={facebook} />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@firefox" />
        <meta name="twitter:creator" content="@firefox" />
        <meta name="twitter:title" content="Go beyond console.log" />
        <meta
          name="twitter:description"
          content="Still using console.log for debugging JavaScript? There is a better way! Learn how to use Firefox Debugger to debug and fix your code."
        />
        <meta name="twitter:image" content="https://i.imgur.com/HQemmAf.png" />
      </Helmet>

      <Hero breadcrumb>
        <h3>Firefox DevTools</h3>
        <h1>Introduction to Debugger</h1>
      </Hero>
      <div className="main">
        <div className="container">
          <Side currentPageNum={currentPageNum} pageData={pageData} />
          <div className="content">{tutorial}</div>
        </div>
        {homework ? <div>{homework}</div> : ''}
      </div>
      <BottomNav currentPageNum={currentPageNum} pageData={pageData} />
    </Layout>
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
