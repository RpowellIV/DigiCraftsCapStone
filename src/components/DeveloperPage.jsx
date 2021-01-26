import React from 'react';
import '../styles/DeveloperPage.css';
import DeveloperCard from './DeveloperCard';
import RobertImg from '../images/RobertPowell2.png';
import StephenImg from '../images/StephenRoach3.png';
import LewRitImg from '../images/imagejpeg_0.jpg';

function DeveloperPage() {
  return (
    <div className='developerPage'>
      <h1 className='developerPage__title'>Meet the Developers</h1>
      <div className='developerPage__row'>
        <DeveloperCard
          img={RobertImg}
          name='Robert Powell'
          jobTitle='Full-Stack Software Developer'
          linkedInLink='https://www.linkedin.com/in/robert-powell-iv'
          githubLink='https://github.com/RpowellIV'
          portfolioLink='https://rpowelliv.github.io/RobertPowellPotfolio/'
        />
        <DeveloperCard
          img={StephenImg}
          name='Stephen Roach'
          jobTitle='Full-Stack Software Developer'
          linkedInLink='https://www.linkedin.com/in/stephen-d-roach/'
          githubLink='https://github.com/stephen-roach'
          portfolioLink='https://stephenroach.dev/'
        />
        <DeveloperCard
          img={LewRitImg}
          name='Lewis Ritenour'
          jobTitle='Full-Stack Software Developer'
          linkedInLink='https://www.linkedin.com/in/lewis-ritenour-8797721bb/'
          githubLink='https://github.com/LewRit'
          portfolioLink='https://lewrit.github.io/'
        />
      </div>
    </div>
  );
}

export default DeveloperPage;
