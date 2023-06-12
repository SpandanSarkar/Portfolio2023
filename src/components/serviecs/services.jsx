import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Project Documentation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Entity Relationshp Diagram</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Class Diagram</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sequence Diagram</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>WorkFlow Diagram</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Technical Documentation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software Requirements Specification</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Project Presentation</p>
            </li>
          </ul>
        </article>

        {/* End of Project documentation */}

        <article className="service">
          <div className="service__head">
            <h3>Web Application Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Development(Angular, React)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Performance Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API Development (.NET Core, Node JS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Authentication and Authorization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Security Measurement</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Error Handling and Logging</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Migration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Server Configuration and Deployement</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Work Practices</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Agile Principles and Practices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Scrum Framework</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Project Management (Trello, Jira)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Code Review</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Effective Feedback</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Foster Transparency</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Personal Documentation</p>
            </li>
          </ul>
        </article>

        {/* Work Practices */}
      </div>
    </section>
  )
}

export default services