import React from 'react';
import PropTypes from 'prop-types';

const ImgCaption = props => (
  <div className={`img-caption ${props.dark ? 'img-caption--dark' : ''}`}>
    <img className="img-caption__img" src={props.src} alt={props.alt} />
    <span className="img-caption__text">{props.caption}</span>
  </div>
);

ImgCaption.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  dark: PropTypes.bool,
};

ImgCaption.defaultProps = {
  dark: false,
};

export default ImgCaption;
