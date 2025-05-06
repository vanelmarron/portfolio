import "./Hero.scss";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  const rotateXOriginal = useTransform(scrollY, [0, 175], [0, 180]);
  const opacityOriginal = useTransform(scrollY, [0, 175], [1, 0]);

  const rotateXNew = useTransform(scrollY, [150, 300], [180, 360]);
  const opacityNew = useTransform(scrollY, [150, 300], [0, 1]);

  const { t, i18n } = useTranslation("homepage");

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__title-container">
        <motion.h1
          className="hero__title"
          style={{
            rotateX: rotateXOriginal,
            opacity: opacityOriginal,
            position: "absolute",
          }}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.h1
          className="hero__title"
          style={{
            rotateX: rotateXNew,
            opacity: opacityNew,
            position: "absolute",
          }}
        >
          {t('hero.title-flipped')}
        </motion.h1>
      </div>
      <div className="hero__content">
        <p className="hero__text">
          {t('hero.text1')} 
          </p>
          <p className="hero__text">{t('hero.text2')}
        </p>
        <p className="hero__text">{t('hero.text3')}
        </p>
        <Link to="/contact">
        <button className="hero__button">
          {t('hero.button')}
        </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
