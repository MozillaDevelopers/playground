import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

class Redirect extends React.Component {
  componentDidMount() {
    window.location.href = `/playground${this.props.url}`;
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta httpEquiv="refresh" content="1" url={this.props.url} />
          <title>Page Redirect</title>
        </Helmet>
        <div className="container">
          <p className="py12">
            This page has moved and you will be redirected. If you are not redirected
            automatically, follow this <Link to={this.props.url}>link to example</Link>.
          </p>
        </div>
      </div>
    );
  }
}

Redirect.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Redirect;
