import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from 'next/link';

// The line between side-nav items
const SideLine = (props) => {
  if (props.last !== true) {
    return <div className="side-nav__line" />;
  }
  return null;
};

// individual side-nav items
const SideItem = props => (
  <Link href="?id=1">
    <div
      className={classNames(
        'side-nav__item',
        { 'is-active': props.pageNum === props.num },
        { 'is-done': props.num < props.pageNum },
      )}
    >
      <div className="side-nav__wrap">
        <div className="side-nav__circle">
          <div className="side-nav__circle-inner" />
        </div>
        <span className="side-nav__page">{props.page}</span>
      </div>
      <SideLine last={props.last} />
    </div>
  </Link>
);

// The entire sidebar
const Side = props => (
  <div className="side">
    <SideItem pageNum={props.pageNum} num={1} page="Terminology" active />
    <SideItem pageNum={props.pageNum} num={2} page="Your First Grid" />
    <SideItem pageNum={props.pageNum} num={3} page="Your First Grid" />
    <SideItem pageNum={props.pageNum} num={4} page="Your First Grid" />
    <SideItem pageNum={props.pageNum} num={5} page="Your First Grid" last />
  </div>
);

SideLine.propTypes = {
  last: PropTypes.bool,
};

SideItem.propTypes = {
  pageNum: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
  last: PropTypes.bool,
};

Side.propTypes = {
  pageNum: PropTypes.number.isRequired,
};

SideLine.defaultProps = {
  last: false,
};

SideItem.defaultProps = {
  active: false,
  last: false,
};


export default Side;
