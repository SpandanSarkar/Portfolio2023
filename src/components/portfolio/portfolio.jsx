import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/Java.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Responsive Website 1",
    link: "https://github.com/SpandanSarkar/ResponsivePortfolioDemo",
    demo: "https://spandansarkar.github.io/ResponsivePortfolioDemo/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Responsive Website 2",
    link: "https://github.com/SpandanSarkar/bootstrap_project2_mac",
    demo: "https://spandansarkar.github.io/bootstrap_project2_mac/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Responsive Website 3",
    link: "https://github.com/SpandanSarkar/BootStrap_WebImpact",
    demo: "https://spandansarkar.github.io/BootStrap_WebImpact/index.html",
  },
  {
    id: 4,
    image: IMG4,
    title: "Responsive Website 4",
    link: "https://github.com/SpandanSarkar/Demo_template_to_responsive_layout",
    demo: "https://spandansarkar.github.io/Demo_template_to_responsive_layout/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Tution Management App",
    link: "https://github.com/SpandanSarkar/Java-Project",
    demo: "https://github.com/SpandanSarkar/Java-Project",
  },
  {
    id: 6,
    image: IMG5,
    title: "Hospital Management App",
    link: "https://github.com/SpandanSarkar/Hospital_management_Java",
    demo: "https://github.com/SpandanSarkar/Hospital_management_Java",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, link, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={link}
                    className="btn"
                    target="_blank"
                    rel="noreferrer">
                    Github
                  </a>
                  <a
                    href= {demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
};

export default portfolio;
