import PropTypes from 'prop-types';

// Components
import Side from './Side';

const Main = ({ children, currentPageNum }) => (
  <div className="main">
    <div className="contain">
      <Side currentPageNum={currentPageNum} />
      <div className="content">{children}</div>
    </div>
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
  currentPageNum: PropTypes.number.isRequired,
};

export default Main;
