import React from 'react';
import { Helmet } from 'react-helmet';
import 'typeface-antonio';

// images
import faviconico from './img/favicon.ico';
import faviconpng from './img/favicon.png';

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
    </Helmet>

    <Header />

    {children()}

    <CTA />
    <Footer />
  </div>
);

export default Layout;
