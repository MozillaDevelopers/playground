import React from 'react';

// styles
import 'typeface-antonio';
import '../styles/style.scss';

// Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/layout/Hero';

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />

    <Hero />

    {children()}

    <Footer />
  </div>
);

export default Layout;
