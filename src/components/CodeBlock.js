import React from 'react';
import PropTypes from 'prop-types';

const CodeBlock = ({ children }) => (
  <pre className="code-block">
    <code>{children}</code>
  </pre>
);

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CodeBlock;
