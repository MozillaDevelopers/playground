/* eslint-disable react/no-danger */
import Head from 'next/head';
import PropTypes from 'prop-types';

// styles
import stylesheet from 'styles/style.scss';

// Components
import Header from './Header';
import Footer from './Footer';
import BottomNav from './BottomNav';
import Hero from '../../components/Hero';

const Layout = ({ children, title = 'Whiskey, Sugar and Bitters' }) => (
  <div className="wrapper">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>{title}</title>
      <meta name="description" content="Whiskey, Sugar and Bitters" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="favicon.png" />
    </Head>
    <Header />

    <Hero />

    {children}

    <BottomNav />
    <Footer />
  </div>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
