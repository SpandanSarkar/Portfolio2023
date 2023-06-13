import React from "react";
import "./testimonials.css";
import AVRT1 from "../../assets/mozibor.jpg";

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonial</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVRT1} alt="avt" />
          </div>
          <h5 className="client__name">Mir Mozibor Rahman, PhD</h5>
          <h5 className="client__org">Assitant Professor, Brac University</h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            sequi. Repudiandae saepe ullam accusamus quis dolorem, porro earum
            officia temporibus maxime tempore eveniet rerum id eius sed,
            reiciendis voluptatibus. Ea.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVRT1} alt="avt" />
          </div>
          <h5 className="client__name">Mir Mozibor Rahman, PhD</h5>
          <h5 className="client__org">Assitant Professor, Brac University</h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            sequi. Repudiandae saepe ullam accusamus quis dolorem, porro earum
            officia temporibus maxime tempore eveniet rerum id eius sed,
            reiciendis voluptatibus. Ea.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVRT1} alt="avt" />
          </div>
          <h5 className="client__name">Mir Mozibor Rahman, PhD</h5>
          <h5 className="client__org">Assitant Professor, Brac University</h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            sequi. Repudiandae saepe ullam accusamus quis dolorem, porro earum
            officia temporibus maxime tempore eveniet rerum id eius sed,
            reiciendis voluptatibus. Ea.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVRT1} alt="avt" />
          </div>
          <h5 className="client__name">Mir Mozibor Rahman, PhD</h5>
          <h5 className="client__org">Assitant Professor, Brac University</h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            sequi. Repudiandae saepe ullam accusamus quis dolorem, porro earum
            officia temporibus maxime tempore eveniet rerum id eius sed,
            reiciendis voluptatibus. Ea.
          </small>
        </article>
      </div>
    </section>
  );
};

export default testimonials;

// 2:30 hr
