import React from 'react';
import Project from '../Project';
import image01 from '../../assets/images/screenshot-horiseon.jpg';

const projects = [
  {
    name: 'Project 1',
    tech: 'React',
    image: image01,
    alt: 'screenshot of Horizeon website refactor',
    link: 'https://richardmartinaus.github.io/Horiseon_Code_Refactor/',
    ghlink: 'https://github.com/RichardMartinAus/Horiseon_Code_Refactor',
  },
  {
    name: 'Project 2',
    tech: 'React',
    image: './assets/images/screenshot-horiseon.jpg',
    alt: 'screenshot of Horizeon website refactor',
    link: 'https://richardmartinaus.github.io/Horiseon_Code_Refactor/',
    ghlink: 'https://github.com/RichardMartinAus/Horiseon_Code_Refactor',
  },
  {
    name: 'Project 3',
    tech: 'React',
    image: './assets/images/screenshot-horiseon.jpg',
    alt: 'screenshot of Horizeon website refactor',
    link: 'https://richardmartinaus.github.io/Horiseon_Code_Refactor/',
    ghlink: 'https://github.com/RichardMartinAus/Horiseon_Code_Refactor',
  },
  {
    name: 'Project 4',
    tech: 'React',
    image: './assets/images/screenshot-horiseon.jpg',
    alt: 'screenshot of Horizeon website refactor',
    link: 'https://richardmartinaus.github.io/Horiseon_Code_Refactor/',
    ghlink: 'https://github.com/RichardMartinAus/Horiseon_Code_Refactor',
  },
  {
    name: 'Project 5',
    tech: 'React',
    image: './assets/images/screenshot-horiseon.jpg',
    alt: 'screenshot of Horizeon website refactor',
    link: 'https://richardmartinaus.github.io/Horiseon_Code_Refactor/',
    ghlink: 'https://github.com/RichardMartinAus/Horiseon_Code_Refactor',
  },
  {
    name: 'Project 6',
    tech: 'React',
    image: './assets/images/screenshot-horiseon.jpg',
    alt: 'screenshot of Horizeon website refactor',
    link: 'https://richardmartinaus.github.io/Horiseon_Code_Refactor/',
    ghlink: 'https://github.com/RichardMartinAus/Horiseon_Code_Refactor',
  },
];

export default function allProjects() {
  return (
    <div>
      <h2>Below are some of the projects I've built</h2>
      {projects.map((project) => (
        <Project
          image={project.image}
          name={project.name}
          tech={project.tech}
          alt={project.alt}
          link={project.link}
          ghlink={project.ghlink}
        />
      ))}
    </div>
  );
}
