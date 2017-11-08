import React from 'react';
import PropTypes from 'prop-types';

import logo from '../img/ff-logo.png';

const DevHomework = props => (
  <div className="homework">
    <div className="container">
      <img className="homework__logo" alt="Firefox Logo" src={logo} />
      <h2 className="homework__title">{props.title}</h2>
      <div className="row">
        <div className="homework__content">{props.children}</div>
      </div>
    </div>
  </div>
);

DevHomework.PropTypes = {
  title: PropTypes.string.isRequired,
};

export default DevHomework;
