import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="vamsi"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
            <h5>Fresher</h5>
            <small>Aspiring Developer</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>5 + projects</small>
            </article>
          </div>

          <p>
          Hi, I'm VAMSI, a recent graduate passionate about frontend web development. I love creating websites that look great and work seamlessly.I've worked on projects during my studies, turning design ideas into functional websites.
          </p>
          <a href="#contact" className='btn btn-primaty'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
