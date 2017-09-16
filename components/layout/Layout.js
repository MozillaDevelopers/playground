/* eslint-disable react/no-danger */
import Head from 'next/head';
import PropTypes from 'prop-types';

// styles
import stylesheet from 'styles/style.scss';

// data
import pageData from '../../data/pageData';

// Components
import Header from './Header';
import Footer from './Footer';
import BottomNav from './BottomNav';
import Hero from '../../components/Hero';

const Layout = ({ children, currentPageNum, exampleCSS }) => {
  // get info of current page by searching for currentPageNum in the pageData array
  const currentPage = pageData.find(page => page.order === currentPageNum);
  return (
    <div className="wrapper">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style dangerouslySetInnerHTML={{ __html: exampleCSS }} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>CSS Grid Layout | {currentPage.title}</title>
        <meta name="description" content="Whiskey, Sugar and Bitters" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <Header />

      <Hero />

      {children}

      <BottomNav currentPageNum={currentPageNum} />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  currentPageNum: PropTypes.number.isRequired,
  exampleCSS: PropTypes.node,
};

Layout.defaultProps = {
  exampleCSS: '',
};

export default Layout;
