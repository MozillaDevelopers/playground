import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// data
import pageData from '../../data/pageData';

// Components
import Side from './Side';
import BottomNav from './BottomNav';

const Main = ({ currentPageNum, tutorial, homework }) => {
  // Get current page data from data/pageData.js
  const currentPageData = pageData.find(page => page.order === currentPageNum);
  return (
    <div>
      <Helmet>
        <title>{`CSS Grid PlayGround | ${currentPageData.title} | Mozilla`}</title>
      </Helmet>
      <div className="main">
        <div className="contain">
          <Side currentPageNum={currentPageNum} />
          <div className="content">{tutorial}</div>
        </div>
        {homework ? <div>{homework}</div> : ''}
      </div>
      <BottomNav currentPageNum={currentPageNum} />
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
