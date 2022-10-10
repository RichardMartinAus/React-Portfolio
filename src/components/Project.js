import React from 'react';
import Github from '../assets/images/github.svg';

export default function Project(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.image} alt={props.alt} width="100%" />
        <div>
          <a href={props.link} target="blank">
            <h2>{props.name}</h2>
          </a>
          <p>{props.tech}</p>
          <a href={props.ghlink} target="blank">
            <img src={Github} alt="github logo" height="20px" />
          </a>
        </div>
      </div>
    </div>
  );
}
