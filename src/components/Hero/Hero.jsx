import "./Hero.scss";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  const rotateXOriginal = useTransform(scrollY, [0, 175], [0, 180]);
  const opacityOriginal = useTransform(scrollY, [0, 175], [1, 0]);

  const rotateXNew = useTransform(scrollY, [150, 300], [180, 360]);
  const opacityNew = useTransform(scrollY, [150, 300], [0, 1]);

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
          Hi, I'm Vanessa.
        </motion.h1>
        <motion.h1
          className="hero__title"
          style={{
            rotateX: rotateXNew,
            opacity: opacityNew,
            position: "absolute",
          }}
        >
          WEB DEVELOPER
        </motion.h1>
      </div>
      <div className="hero__content">
        <p className="hero__text">
          I'm a web developer based in Vancouver, Beautiful British Columbia. 
          </p><p className="hero__text">I
          build full-stack applications and websites that will help you bridge the gap between
          your business and your customers.
        </p>
        <Link to="/contact">
        <button className="hero__button">
          Let’s turn your ideas into code!
        </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
