import React from 'react';
import '../styles/DeveloperCard.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

function DeveloperCard({
  name,
  img,
  jobTitle,
  linkedInLink,
  githubLink,
  portfolioLink,
}) {
  return (
    <div className='developerCard'>
      <img className='developerCard__img' src={img} alt='' />

      <h5 className='developerCard__name'>{name}</h5>
      <p className='developerCard__jobTitle'>{jobTitle}</p>
      <div className='developerCard__socialLinks'>
        <a href={linkedInLink}>
          <LinkedInIcon fontSize='large' />
        </a>
        <a href={githubLink}>
          <GitHubIcon fontSize='large' />
        </a>
        <a href={portfolioLink}>
          <LinkIcon fontSize='large' />
        </a>
      </div>
    </div>
  );
}

export default DeveloperCard;
