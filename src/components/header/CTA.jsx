import React from 'react'
import CV from '../../assets/Spandan_sarkar_cv.pdf'
const CTA = () => {
  return (
    <div class="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA