import React from 'react';

import PropTypes from 'prop-types';

// Components
import Side from './Side';
import BottomNav from './BottomNav';

const Main = ({ currentPageNum, tutorial, homework }) => (
  <div>
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

Main.propTypes = {
  tutorial: PropTypes.node.isRequired,
  homework: PropTypes.node,
  currentPageNum: PropTypes.number.isRequired,
};

Main.defaultProps = {
  homework: '',
};

export default Main;
