import React from 'react';
import { Helmet } from 'react-helmet';
import 'typeface-antonio';

// images
import faviconico from './img/favicon.ico';
import faviconpng from './img/favicon.png';
import facebook from './img/fb.png';

// styles
import '../styles/style.scss';

// Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/layout/Hero';

const Layout = ({ children }) => (
  <div className="wrapper">
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href={faviconico} />
      <link rel="icon" type="image/png" href={faviconpng} sizes="196x196" />

      <meta
        name="description"
        content="Learn about CSS Grid Layout and Firefox's CSS Grid Layout Tools."
      />
      <meta property="og:url" content="https://mozilladevelopers.github.io/playground" />
      <meta property="og:title" content="CSS Grid Layout + Firefox = ❤️" />
      <meta
        property="og:description"
        content="CSS Grid Layout is a game-changer for web developers. Learn more about CSS Grid and the CSS Grid Layout panel in Firefox."
      />
      <meta property="og:image" content={facebook} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mozilla" />
      <meta name="twitter:creator" content="@mozilla" />
      <meta name="twitter:title" content="CSS Grid Layout + Firefox = ❤️" />
      <meta
        name="twitter:description"
        content="CSS Grid Layout is a game-changer for web developers. Learn more about CSS Grid and the CSS Grid Layout panel in Firefox."
      />
      <meta name="twitter:image" content="https://i.imgur.com/NLUqs7J.png" />
    </Helmet>

    <Header />

    <Hero />

    {children()}

    <Footer />
  </div>
);

export default Layout;
