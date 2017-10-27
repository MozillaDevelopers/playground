import React from 'react';

import Link from 'gatsby-link';

import arrowRight from './img/arrow-right2.svg';

const TutorialItem = props => (
  <div className="tutorial-item col-md-6">
    <Link to={props.link}>
      <img className="tutorial-item__img" src={props.photo} alt="" />
    </Link>
    <h2 className="tutorial-item__title">{props.title}</h2>
    <p>{props.desc}</p>
    <Link to={props.link}>
      <button className="tutorial-item__btn">
        Go to Playground <img src={arrowRight} alt="arrow" />
      </button>
    </Link>
  </div>
);

export default TutorialItem;
