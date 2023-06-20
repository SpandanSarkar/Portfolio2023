import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Spandan Sarkar
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/spandan-sarkar-690a57174"
          target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://leetcode.com/user0904tF/" target="_blank">
          <SiLeetcode />
        </a>
        <a href="https://github.com/SpandanSarkar" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Spandan Sarkar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
