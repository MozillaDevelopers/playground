import React from 'react';
import download from '../components/img/download.svg';

const DownloadButton = ({ children, className, float }) => (
  <button className={`download-button ${className} float-${float}`}>
    <img className="download-button__icon" src={download} alt="download" />
    {children}
  </button>
);

export default DownloadButton;
