import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'block',
  fontSize: '14px',
  marginTop: '1rem',
};

const linkStyle = {
  color: 'black',
  textDecoration: 'underline',
};

const CodepenLink = props => (
  <span style={style}>
    <a style={linkStyle} href={props.link} target="_blank" rel="noopener noreferrer">
      View on Codepen
    </a>
  </span>
);

CodepenLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CodepenLink;

