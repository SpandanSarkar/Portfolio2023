import React from 'react'
import './about.css'
import ME from '../../assets/image2.jpg'
import {BsFillAwardFill} from 'react-icons/bs' 
import {SiLeetcode} from 'react-icons/si' 
import {BsGithub} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFillAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year of <b>Develepment Experience</b></small>
            </article>
            <article className='about__card'>
              <SiLeetcode className='about__icon'/>
              <h5>Problem Solving</h5>
              <small>130+ Solutions on <b>LeetCode</b></small>
            </article>
            <article className='about__card'>
              <BsGithub className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Projects on <b>GitHub</b></small>
            </article>
          </div>
          <p>
            Being able to handle multiple tasks is my characteristic. I am always energetic and eager to learn new skills. I have experience of working with various types of people. Besides, I always love to share my opinions with others and learn new things from people. Also I am active in LeetCode (150+ Problem Solved) and LinkedIn regularly to stay updated about the new technologies.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About