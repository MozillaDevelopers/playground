import React from 'react';
import PropTypes from 'prop-types';

const trackClick = () => {
  if (typeof ga === 'function') {
    ga('send', 'event', {
      eventCategory: 'Outbound Link',
      eventAction: 'click',
      eventLabel: 'Download DevEdition',
    });
  }
};

const DownloadLink = props => (
  <a
    href={`https://www.mozilla.org/firefox/developer/?utm_source=moz-playground&utm_medium=referral&utm_content=${props.content}`}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackClick()}
  >
    {props.children}
  </a>
);

DownloadLink.propTypes = {
  content: PropTypes.string.isRequired,
};

export default DownloadLink;
