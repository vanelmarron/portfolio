import "./AboutMe.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import codingApproach from "../../assets/images/coding-approach.png";
import githubIcon from "../../assets/images/github.svg";

function AboutMe() {

  const [hover, setHover] = useState(false);
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { amount: 0.4, once: true });

  return (
    <motion.section className="about" id="about" ref={aboutRef}>
      <motion.div className="about__intro">
        <h2 className="about__title">About Me</h2>
      </motion.div>
      <div className="about__description">
        <motion.div className="about__list" initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
        </motion.div>
        <motion.div className="about__details" initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
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
        </motion.div>
      </div>
      <motion.div
        className="about__approach-wrapper"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          className="about__approach"
          src={codingApproach}
          alt="Coding Approach"
        />
        {hover && (
          <Link to="https://github.com/vanelmarron" target="_blank">
          <div className="about__github">
              <p className="about__github-text">Visit my GitHub</p>
              <img className="about__github-icon" src={githubIcon} alt="GitHub Icon" />
          </div>
          </Link>
        )}
      </motion.div>
      <PhotoCarousel />
    </motion.section>
  );
}

export default AboutMe;
