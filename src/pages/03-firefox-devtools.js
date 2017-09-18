import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';

const Tutorial = () => (
  <div>
    <h2>Firefox DevTools</h2>
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>this is some homework</p>
  </DevHomework>
);

export default () => <Main currentPageNum={3} tutorial={<Tutorial />} homework={<Homework />} />;
