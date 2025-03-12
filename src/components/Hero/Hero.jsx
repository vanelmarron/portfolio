import "./Hero.scss";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  const rotateXOriginal = useTransform(scrollY, [0, 300], [0, 180]);
  const opacityOriginal = useTransform(scrollY, [0, 300], [1, 0]);

  const rotateXNew = useTransform(scrollY, [300, 600], [180, 360]);
  const opacityNew = useTransform(scrollY, [300, 600], [0, 1]);

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
          I'm a web developer based in Vancouver, Beautiful British Columbia. I
          build full-stack application that will help you bridge the gap between
          your business and your customers.
        </p>
        <button className="hero__button">
          Let’s turn your ideas into code!
        </button>
      </div>
    </section>
  );
}

export default Hero;
