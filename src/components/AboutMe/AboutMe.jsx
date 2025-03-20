import "./AboutMe.scss";
import { Link } from "react-router-dom";

import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import codingApproach from "../../assets/images/coding-approach.png";

function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="about__intro">
        <h2 className="about__title">About Me</h2>
      </div>
      <div className="about__description">
        <div className="about__list" >
          <div className="about__sublist">
            <div className="about__item">
              <p className="about__item--bold">5+ Years</p>
              <p className="about__item--reg">Marketing</p>
            </div>
            <div className="about__item">
              <p className="about__item--bold">Creative</p>
              <p className="about__item--reg">Problem Solver</p>
            </div>
          </div>
          <div className="about__sublist">
            <div className="about__item">
              <p className="about__item--bold">Active </p>
              <p className="about__item--reg">Adventurous</p>
            </div>
            <div className="about__item">
              <p className="about__item--bold">Bilingual</p>
              <p className="about__item--reg">FR | EN</p>
            </div>
          </div>
        </div>
        <div className="about__details">
          <h3 className="about__tagline">
            Crafting Beautiful, Responsive, and Purposeful Designs
          </h3>
          <p className="about__coding">
            I'm an active and outdoorsy person who has recently discovered a
            passion for coding.{" "}
          </p>
          <p className="about__coding">
            To me, it's a form of art—one that I use to craft visually
            appealing, responsive, and user-friendly digital experiences. I
            bring creativity and attention to detail to every project, ensuring
            the final product truly reflects my clients' vision.
          </p>
        </div>
      </div>
      <Link to="https://github.com/vanelmarron" target="_blank">
      <div className="about__approach-wrapper">
      <img className="about__approach" src={codingApproach} alt="Coding Approach" />
      </div>
      </Link>
      <PhotoCarousel />
    </section>
  );
}

export default AboutMe;