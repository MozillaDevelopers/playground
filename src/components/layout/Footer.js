import React from 'react';

import logo from '../img/logo-white.svg';

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img className="footer__logo" src={logo} alt="Mozilla Logo" />
        </div>
        <div className="col-md-4">
          <span className="footer__header">Community & Resources</span>
          <ul className="footer__list">
            <li>
              <a
                href="http://github.com/mozilladevelopers/playground/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Contribute on Github
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/FirefoxDevTools"
                rel="noopener noreferrer"
                target="_blank"
              >
                Firefox DevTools Twitter
              </a>
            </li>
            <li>
              <a
                href="https://devtools-html-slack.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Firefox DevTools Slack Channel
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout"
                rel="noopener noreferrer"
                target="_blank"
              >
                MDN
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-4">
          <span className="footer__header">Mozilla</span>
          <ul className="footer__list">
            <li>
              <a href="https://www.mozilla.org/about/" rel="noopener noreferrer" target="_blank">
                About
              </a>
            </li>
            <li>
              <a href="https://www.mozilla.org/contact/" rel="noopener noreferrer" target="_blank">
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://donate.mozilla.org/?presets=100,50,25,15&amount=50"
                rel="noopener noreferrer"
                target="_blank"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer__div" />
      <ul className="footer__legal">
        <li>
          <a href="https://www.mozilla.org/privacy/" rel="noopener noreferrer" target="_blank">
            Privacy
          </a>
        </li>
        <li>
          <a
            href="https://www.mozilla.org/privacy/websites/#cookies"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cookies
          </a>
        </li>
        <li>
          <a href="https://www.mozilla.org/legal/" rel="noopener noreferrer" target="_blank">
            Legal
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
