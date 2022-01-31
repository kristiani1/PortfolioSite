import { Avatar } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hei, olen <span className='about__name'>{name}.</span>
        </h1>
      )}


        <Avatar
        alt="Kristian Toivonen"
        src={ `${ process.env.PUBLIC_URL || '' }/img/profile-image-removebg-preview.png` }
        style={{ height: '150px', width: '150px', alignSelf: 'center' }}
        />


      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} download target="_blank" rel="noreferrer">
            <span type='button' className='btn btn--outline'>
              CV
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
