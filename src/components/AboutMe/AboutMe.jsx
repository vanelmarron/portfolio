import "./AboutMe.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import codingApproach from "../../assets/images/coding-approach.png";
import codingApproachFR from "../../assets/images/coding-approach-fr.png";
import githubIcon from "../../assets/images/github.svg";

function AboutMe() {
  const { t } = useTranslation("homepage");

  const [hover, setHover] = useState(false);
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { amount: 0.4, once: true });

  return (
    <motion.section className="about" id="about" ref={aboutRef}>
      <motion.div className="about__intro">
        <h2 className="about__title">{t("about-me.title")}</h2>
      </motion.div>
      <div className="about__description">
        <motion.div
          className="about__list"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="about__sublist">
            <div className="about__item">
              <p className="about__item--bold">{t("about-me.item1-bold")}</p>
              <p className="about__item--reg">{t("about-me.item1-reg")}</p>
            </div>
            <div className="about__item">
              <p className="about__item--bold">{t("about-me.item2-bold")}</p>
              <p className="about__item--reg">{t("about-me.item2-reg")}</p>
            </div>
          </div>
          <div className="about__sublist">
            <div className="about__item">
              <p className="about__item--bold">{t("about-me.item3-bold")}</p>
              <p className="about__item--reg">{t("about-me.item3-reg")}</p>
            </div>
            <div className="about__item">
              <p className="about__item--bold">{t("about-me.item4-bold")}</p>
              <p className="about__item--reg">{t("about-me.item4-reg")}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="about__details"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="about__tagline">{t("about-me.tagline")}</h3>
          <p className="about__coding">{t("about-me.coding1")}</p>
          <p className="about__coding">{t("about-me.coding2")}</p>
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
          src={i18n.language === "fr" ? codingApproachFR : codingApproach}
          alt="Coding Approach"
        />
        {hover && (
          <Link to="https://github.com/vanelmarron" target="_blank">
            <div className="about__github">
              <p className="about__github-text">{t("about-me.approach")}</p>
              <img
                className="about__github-icon"
                src={githubIcon}
                alt="GitHub Icon"
              />
            </div>
          </Link>
        )}
      </motion.div>
      <PhotoCarousel />
    </motion.section>
  );
}

export default AboutMe;
