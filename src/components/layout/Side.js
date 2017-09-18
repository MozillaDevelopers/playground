import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from 'gatsby-link';
import pageData from '../../data/pageData';

// images
import done from '../img/done.svg';
import current from '../img/current.svg';

// individual side-nav items
const SideItem = props => (
  <Link to={props.link}>
    <div
      className={classNames(
        'side-nav__item',
        { 'is-active': props.currentPageNum === props.order },
        { 'is-done': props.order < props.currentPageNum },
      )}
    >
      <div className="side-nav__wrap">
        <div className="side-nav__circle">
          <div className="side-nav__circle-inner">
            {props.currentPageNum === props.order ? <img alt="current" src={current} /> : ''}
            {props.order < props.currentPageNum ? <img alt="done" src={done} /> : ''}
          </div>
        </div>
        <span className="side-nav__page">{props.title}</span>
      </div>
      <div
        className={
          props.currentPageNum > props.order && props.order !== pageData.length
            ? 'side-nav__line is-active'
            : 'side-nav__line'
        }
      />
    </div>
  </Link>
);

// The entire sidebar
const Side = (props) => {
  const pages = pageData.map(page => (
    <SideItem
      key={page.order}
      currentPageNum={props.currentPageNum}
      order={page.order}
      title={page.title}
      link={page.link}
    />
  ));
  return <div className="side">{pages}</div>;
};

SideItem.propTypes = {
  currentPageNum: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Side.propTypes = {
  currentPageNum: PropTypes.number.isRequired,
};

SideItem.defaultProps = {
  active: false,
};

export default Side;
