import React from 'react';

// Temporary workaround for malformed link in promoted Twitter tweet: https://twitter.com/firefox/status/912475974687707136
if (window.location.pathname.indexOf('/&') === 0) {
  window.location.href = window.location.href.replace('/&', '/?');
}

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
  </div>
);

export default NotFoundPage;
