import React from 'react';
import download from '../components/img/download.svg';

const DownloadButton = ({ children, className, float, url }) => (
  <a className={`download-button ${className} float-${float}`} href={url} rel="noopener noreferrer" target="_blank">
    <img className="download-button__icon" src={download} alt="download" />
    {children}
  </a>
);

export default DownloadButton;
