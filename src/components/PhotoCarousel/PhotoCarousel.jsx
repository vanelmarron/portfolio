import "./PhotoCarousel.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Photo1 from "../../assets/about-me/1.png";
import Photo2 from "../../assets/about-me/2.png";
import Photo3 from "../../assets/about-me/3.png";
import Photo4 from "../../assets/about-me/4.png";
import Photo5 from "../../assets/about-me/5.png";
import Photo6 from "../../assets/about-me/6.png";
import Photo7 from "../../assets/about-me/7.png";
import Photo8 from "../../assets/about-me/8.png";
import Photo9 from "../../assets/about-me/9.png";
import Photo10 from "../../assets/about-me/10.png";
import Photo11 from "../../assets/about-me/11.png";
import Photo12 from "../../assets/about-me/12.png";
import Photo13 from "../../assets/about-me/13.png";
import Photo14 from "../../assets/about-me/14.png";
import Photo15 from "../../assets/about-me/15.png";
import Photo16 from "../../assets/about-me/16.png";

const images = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo16,
  Photo15,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
  Photo11,
  Photo12,
  Photo13,
  Photo14,
];

function PhotoCarousel() {
  const { t } = useTranslation("homepage");

  const [activeIndex, setActiveIndex] = useState(3);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      setActiveIndex((prev) => (prev + 1) % images.length);
    } else if (info.offset.x > threshold) {
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="nutshell">
      <h2 className="nutshell__title">{t('not-coding.title')}</h2>
      <p className="nutshell__description">
      {t('not-coding.text')} 
      </p>
      <p className="nutshell__description">{t('not-coding.text2')}</p>
      <div className="carousel">
        <motion.div
          className="carousel__track"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {images.map((src, index) => {
            const distance =
              (index - activeIndex + images.length) % images.length;
            const wrappedDistance =
              distance > images.length / 2
                ? distance - images.length
                : distance;

            const scale = wrappedDistance === 0 ? 2 : 1;
            const opacity =
              Math.abs(wrappedDistance) <= 1.5
                ? 1 - Math.abs(wrappedDistance) * 0.5
                : 0.5;
            const translateX = wrappedDistance * 180;
            const zIndex = wrappedDistance === 0 ? 10 : 5;

            return (
              <motion.img
                key={index}
                src={src}
                alt={`Photo ${index}`}
                className="carousel__image"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale, opacity, x: translateX }}
                transition={{ duration: 0 }}
                onClick={() => handleClick(index)}
                style={{ zIndex }}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default PhotoCarousel;
