import React from 'react'
import './experience.css'
import {BsFillClipboard2CheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {TbBrandTypescript} from 'react-icons/tb'
import {FaAngular} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiDotnet} from 'react-icons/si'
import {DiNodejsSmall} from 'react-icons/di'
import {DiJava} from 'react-icons/di'
import {SiOracle} from 'react-icons/si'
import {DiMongodb} from 'react-icons/di'
import {SiMysql} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandTypescript className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaAngular className='experience__details-icon'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* Frontend ends Backend Starts */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiDotnet className='experience__details-icon'/>
              <div>
                <h4>ASP.NET Core</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiNodejsSmall className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJava className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Problem Solving</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiOracle className='experience__details-icon'/>
              <div>
                <h4>Oracle</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience