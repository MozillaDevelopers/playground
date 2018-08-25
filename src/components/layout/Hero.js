import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// images
import arrowLeft from '../img/arrow-left2.svg';

const Hero = props => (
  <div className={`hero ${props.className ? props.className : ''}`}>
    {props.breadcrumb && (
      <div className="container">
        <Link to="/">
          <div className="hero__breadcrumb">
            <img src={arrowLeft} alt="arrow left" />
            <span>Playground Home</span>
          </div>
        </Link>
      </div>
    )}
    {props.children}

    <svg
      width="100%"
      height="47px"
      viewBox="0 0 1440 47"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="hero__div"
      preserveAspectRatio="none"
    >
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M0,0.0577405639 C117.504588,18.44359 269.602477,22.1720696 456.293666,11.2431795 C562.076057,5.05068514 730.784198,0.911127653 885.297232,3.27366179 C1157.17617,7.43074321 1386.98062,21.3276838 1440,38.3891927 L1440,46.9388979 L0,46.9388979 L0,0.0577405639 Z"
          id="Path-9"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  </div>
);

Hero.propTypes = {
  className: PropTypes.string,
  breadcrumb: PropTypes.bool,
};

Hero.defaultProps = {
  background: '#FFF',
  className: undefined,
  breadcrumb: undefined,
};

export default Hero;
