import React from 'react';

// components
import Hero from '../components/layout/Hero';
import TutorialList from '../components/TutorialList';

// images
import dino from './404/tempscreen.png';

const NotFoundPage = () => {
  return (
    <div>
      <Hero className="hero--gray">
        <div className="not-found">
          <div className="container">
            <div className="not-found__dino">
              <img src={dino} alt="lost dino" />
            </div>
            <div className="not-found__text">
              <h1>This page has moved!</h1>
              <p className="mt2">We recently moved a few pages around. Scroll down to find different playgrounds and tutorials.</p>
            </div>
          </div>
        </div>

      </Hero>
      <TutorialList />
    </div>
  );
};

export default NotFoundPage;
