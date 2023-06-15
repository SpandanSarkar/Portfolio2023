import React from "react";
import "./testimonials.css";
import AVRT1 from "../../assets/mozibor.jpg";
import AVRT2 from "../../assets/murad.jpg";
import AVRT3 from "../../assets/najeefa.jpg";
import AVRT4 from "../../assets/azad.jpg";
import AVRT5 from "../../assets/kibria.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVRT1,
    name: "Mir Mozibor Rahman, PhD",
    designation: "Assitant Professor, Brac University",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, sequi. Repudiandae saepe ullam accusamus quis dolorem, porro earum officia temporibus maxime tempore eveniet rerum id eius sed, reiciendis voluptatibus. Ea.",
  },
  {
    avatar: AVRT2,
    name: "Mohammad Hasan Murad",
    designation: "Assitant Professor, Brac University",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, sequi. Repudiandae saepe ullam accusamus quis dolorem, porro earum officia temporibus maxime tempore eveniet rerum id eius sed, reiciendis voluptatibus. Ea.",
  },
  {
    avatar: AVRT3,
    name: "Najeefa Nikhat Choudhury",
    designation: "Lecturer, Brac University",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, sequi. Repudiandae saepe ullam accusamus quis dolorem, porro earum officia temporibus maxime tempore eveniet rerum id eius sed, reiciendis voluptatibus. Ea.",
  },
  {
    avatar: AVRT4,
    name: "Mohammad Abul Kalam Azad",
    designation: "Sr. Software Engineer, ERA InfoTech Ltd.",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, sequi. Repudiandae saepe ullam accusamus quis dolorem, porro earum officia temporibus maxime tempore eveniet rerum id eius sed, reiciendis voluptatibus. Ea.",
  },
  {
    avatar: AVRT5,
    name: "Golam Kibria",
    designation: "Associate Software Engineer, ERA InfoTech Ltd.",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, sequi. Repudiandae saepe ullam accusamus quis dolorem, porro earum officia temporibus maxime tempore eveniet rerum id eius sed, reiciendis voluptatibus. Ea.",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, designation, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt= {name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <h5 className="client__org">
                {designation}
              </h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;

// 2:40 hr
