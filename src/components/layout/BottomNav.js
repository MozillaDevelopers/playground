import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';


// Generate Previous Page Link (if this isn't the first page);
const PreviousLink = ({ currentPageNum, pageData }) => {
  if (currentPageNum !== 1) {
    const previousPage = pageData.find(page => page.order === currentPageNum - 1);
    const prevPageName = previousPage.title;
    const prevPageLink = previousPage.link;
    return (
      <div className="bottom-nav__item bottom-nav__item--left">
        <Link to={prevPageLink}>
          <div className="bottom-nav__inner">
            <span className="bottom-nav__lead">Previous</span>
            <span className="bottom-nav__title">{prevPageName}</span>
          </div>
        </Link>
      </div>
    );
  }
  return <div className="bottom-nav__item bottom-nav__item--left" />;
};

// Generate Next Page Link (if this isn't the first page);
const NextLink = ({ currentPageNum, pageData }) => {
  if (currentPageNum !== pageData.length) {
    const NextPage = pageData.find(page => page.order === currentPageNum + 1);
    const nextPageName = NextPage.title;
    const nextPageLink = NextPage.link;
    return (
      <div className="bottom-nav__item bottom-nav__item--right">
        <Link to={nextPageLink}>
          <div className="bottom-nav__inner">
            <span className="bottom-nav__lead">Next</span>
            <span className="bottom-nav__title">{nextPageName}</span>
          </div>
        </Link>
      </div>
    );
  }
  return <div className="bottom-nav__item bottom-nav__item--right" />;
};

const BottomNav = ({ currentPageNum, pageData }) => (
  <div className="bottom-nav">
    <div className="container">
      <PreviousLink currentPageNum={currentPageNum} pageData={pageData} />
      <NextLink currentPageNum={currentPageNum} pageData={pageData} />
    </div>
  </div>
);

BottomNav.propTypes = {
  currentPageNum: PropTypes.number.isRequired,
};

NextLink.propTypes = {
  currentPageNum: PropTypes.number.isRequired,
};

PreviousLink.propTypes = {
  currentPageNum: PropTypes.number.isRequired,
};

export default BottomNav;
