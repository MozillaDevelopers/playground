import React from 'react';
import { Helmet } from 'react-helmet';
import 'typeface-antonio';

// images
import faviconico from './img/favicon.ico';
import faviconpng from './img/favicon.png';
import logo from '../pages/img/ffdelogo.png';

// styles
import '../styles/style.scss';

// Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CTA from '../components/layout/CTA';

const Layout = ({ children }) => (
  <div className="wrapper">
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href={faviconico} />
      <link rel="icon" type="image/png" href={faviconpng} sizes="196x196" />
      <title>{'Firefox DevTools PlayGround | Mozilla'}</title>
      <meta
        name="description"
        content="Learn about CSS Grid Layout, Firefox Debugger, and more with the Firefox DevTools playground."
      />
      <meta property="og:url" content="https://mozilladevelopers.github.io/playground" />
      <meta property="og:title" content="Test, learn, and build with Firefox DevTools" />
      <meta
        property="og:description"
        content="Learn about CSS Grid Layout, Firefox Debugger, and more with the Firefox DevTools playground."
      />
      <meta property="og:image" content={logo} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@firefox" />
      <meta name="twitter:creator" content="@firefox" />
      <meta name="twitter:title" content="Test, learn, and build with Firefox DevTools" />
      <meta
        name="twitter:description"
        content="Learn about CSS Grid Layout, Firefox Debugger, and more with the Firefox DevTools playground."
      />
      <meta name="twitter:image" content="https://i.imgur.com/uHsUxk0.png" />
    </Helmet>

    <Header />

    {children()}

    <CTA />
    <Footer />
  </div>
);

export default Layout;
