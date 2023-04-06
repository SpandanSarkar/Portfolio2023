import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/new.png'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! This is</h5>
        <h1>Spandan Sarkar</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="alt" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header