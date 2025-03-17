import "./AboutMe.scss";
import { useState } from "react";

import openIcon from "../../assets/icons/open.svg";
import collapseIcon from "../../assets/icons/collapse.svg";

import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";

function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="about__intro">
        <h2 className="about__title">About Me</h2>
      </div>
      <div className="about__description">
        <div className="about__list">
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
              <p className="about__item--reg">French & English</p>
            </div>
          </div>
        </div>
        <div className="about__details">
          <h3 className="about__tagline">
            Crafting Beautiful, Responsive, and Purposeful Designs
          </h3>
          <p className="about__coding">
            I'm an active and outdoorsy person who has recently discovered a
            passion for coding. To me, it's a form of art—one that I use to
            craft visually appealing, responsive, and user-friendly digital
            experiences. I bring creativity and attention to detail to every
            project, ensuring the final product truly reflects my clients'
            vision.
          </p>
        </div>
      </div>
      <PhotoCarousel />
    </section>
  );
}

export default AboutMe;
