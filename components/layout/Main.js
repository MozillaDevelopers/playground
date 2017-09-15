import PropTypes from 'prop-types';

import Layout from './Layout';

// Components
import Side from './Side';

const Main = ({ children, pageNum }) => (
  <div className="main">
    <div className="contain">
      <Side pageNum={pageNum} />
      <div className="content">{children}</div>
    </div>
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
  pageNum: PropTypes.number.isRequired,
};

export default Main;
