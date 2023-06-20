import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

import { useRef } from 'react';
import emailjs from 'emailjs-com'


const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q9ilso9', 'template_jggcxe6', form.current, 'ABr4Isr3V4LBkd11V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contanct Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>spandan.99sarkar@gmail.com</h5>
            <a href="https://www.gmail.com" target='_blank' rel="noreferrer">Send an Email</a>
          </article>

          <article className="contact__option">
            <FaLinkedinIn className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Spandan Sarkar</h5>
            <a href="https://www.linkedin.com/in/spandan-sarkar-690a57174/" target='_blank' rel="noreferrer">View Profile</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>01673778899</h5>
            <a href="https://api.whatsapp.com/send?phone=01673778899" target='_blank' rel="noreferrer">WhatsApp Me</a>
          </article>
        </div>
        
        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs