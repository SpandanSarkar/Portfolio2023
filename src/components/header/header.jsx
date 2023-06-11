import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/17101381.png";
import HeaderSocials from "./HeaderSocials";
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! This is</h5>
        <h2>Spandan Sarkar</h2>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <div className="me__image-container">
            <img src={ME} alt="alt"/>
          </div>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        {/* Test Commit Here! */}
      </div>
    </header>
  );
};

export default header;
