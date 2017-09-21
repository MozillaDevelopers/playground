import React from 'react';

import logo from '../img/logo-white.svg';

export default () => (
  <footer className="footer">
    <div className="contain">
      <div className="row">
        <div className="col-md-4">
          <img className="footer__logo" src={logo} alt="Mozilla Logo" />
        </div>
        <div className="col-md-4">
          <span className="footer__header">CSS Grid Layout Resources</span>
          <ul className="footer__list">
            <li>
              <a href="http://jensimmons.com/" rel="noopener noreferrer" target="_blank">
                Jen Simmons
              </a>
            </li>
            <li>
              <a href="https://gridbyexample.com/" rel="noopener noreferrer" target="_blank">
                Rachel Andrew
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
          <a href="https://www.mozilla.org/privacy/" rel="noopener noreferrer" target="_blank">
            Cookies
          </a>
        </li>
        <li>
          <a href="https://www.mozilla.org/privacy/" rel="noopener noreferrer" target="_blank">
            Legal
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
