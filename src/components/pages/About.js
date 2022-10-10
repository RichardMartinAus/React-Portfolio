import React from 'react';
import headshot from '../../assets/images/2022-selfport.jpg';

export default function About() {
  return (
    <div>
      <div class="row">
        <img
          src={headshot}
          alt="black and white portrait of Richard Martin"
          height="200px"
        />
        <h1>Hi, I'm Richard!</h1>
      </div>
      <div class="body-copy">
        <p>
          I'm originally from South Africa but moved to Melbourne in late 2021.
          I have spent the last 19 years working for in-house and boutique
          design agencies all over South Africa with a focus on layout and
          finished art. I've worked on everything from business cards to
          billboards and everything between. <br></br>
          <br></br>With a change in location I thought what better time to
          switch gears and change the direction of my career. So here I am, at
          41 years of age, learning to code! I'm busy building my portfolio as I
          add skills to my stack, so keep an eye on my work section as it
          expands with the knowledge I gain!
        </p>
      </div>
    </div>
  );
}
