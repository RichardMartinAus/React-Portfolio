import React from 'react';
import Project from '../Project';
import image01 from '../../assets/images/screenshot-horiseon.jpg';
import image02 from '../../assets/images/screenshot_wds.jpg';
import image03 from '../../assets/images/screenshot-empt.jpg';
import image04 from '../../assets/images/screenshot_password.jpg';
import image05 from '../../assets/images/screenshot-snbe.jpg';
import image06 from '../../assets/images/screenshot-sc.jpg';

const projects = [
  {
    name: 'Horiseon Code Refactor',
    tech: 'HTML, CSS',
    image: image01,
    alt: 'screenshot of Horizeon website refactor',
    link: 'https://richardmartinaus.github.io/Horiseon_Code_Refactor/',
    ghlink: 'https://github.com/RichardMartinAus/Horiseon_Code_Refactor',
  },
  {
    name: 'Work Day Scheduler',
    tech: 'Javascript',
    image: image02,
    alt: 'screenshot of work day scheduler',
    link: 'https://richardmartinaus.github.io/Work_Day_Scheduler/',
    ghlink: 'https://github.com/RichardMartinAus/Work_Day_Scheduler',
  },
  {
    name: 'Employee Tracker CLA',
    tech: 'Javascript',
    image: image03,
    alt: 'screenshot of employee tracker',
    link: 'https://drive.google.com/file/d/1kFVtIpkn4PZZggrLtourFBBTfqJKlZao/view',
    ghlink: 'https://github.com/RichardMartinAus/Employee-Tracker',
  },
  {
    name: 'Random Password Generator',
    tech: 'Javascript',
    image: image04,
    alt: 'screenshot of random password generator',
    link: 'https://richardmartinaus.github.io/Random-Password-Generator/',
    ghlink: 'https://github.com/RichardMartinAus/Random-Password-Generator',
  },
  {
    name: 'Social Network Backend',
    tech: 'NodeJS, ExpressJS, MongoDB',
    image: image05,
    alt: 'screenshot of social media backend running in Insomnia',
    link: 'https://drive.google.com/file/d/1XaUZz8jxUG7Fo9_0lPayRIWJ2TbNNu5D/view',
    ghlink: 'https://github.com/RichardMartinAus/Social-Network-API',
  },
  {
    name: 'Seaside Cafe',
    tech: 'Node, Express, MySQL, Handlebars',
    image: image06,
    alt: 'screenshot of Seaside Cafe website',
    link: 'https://github.com/RichardMartinAus/Seaside-Cafe',
    ghlink: 'https://seaside-cafe.herokuapp.com/',
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
