import React from 'react';
import Github from '../assets/images/github.svg';
import '../components/project.css';

export default function Project(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.image} alt={props.alt} width="100%" />
        <div>
          <a href={props.link}>
            <h3>{props.name}</h3>
          </a>
          <p>{props.tech}</p>
          <a href={props.ghlink}>
            <img src={Github} alt="github logo" height="20px" />
          </a>
        </div>
      </div>
    </div>
  );
}
