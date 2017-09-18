import React from 'react';
import Main from '../components/layout/Main';
import DevHomework from '../components/layout/DevHomework';

const Tutorial = () => (
  <div>
    <h2>Terminology</h2>
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>this is some homework</p>
  </DevHomework>
);

export default () => <Main currentPageNum={1} tutorial={<Tutorial />} homework={<Homework />} />;
