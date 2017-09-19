import React from 'react';

const Term = props => (
  <div className="term">
    <img className="term__img" alt={props.name} src={props.img} />
    <div className="term__text">
      <span className="term__name">{props.name}</span>
      <p>{props.children}</p>
    </div>
  </div>
);

export default Term;

