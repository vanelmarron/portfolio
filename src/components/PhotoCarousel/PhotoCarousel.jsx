import "./PhotoCarousel.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Photo1 from "../../assets/about-me/1.svg";
import Photo2 from "../../assets/about-me/2.svg";
import Photo3 from "../../assets/about-me/3.svg";
import Photo4 from "../../assets/about-me/4.svg";
import Photo5 from "../../assets/about-me/5.svg";
import Photo6 from "../../assets/about-me/6.svg";
import Photo7 from "../../assets/about-me/7.svg";
import Photo8 from "../../assets/about-me/8.svg";
import Photo9 from "../../assets/about-me/9.svg";
import Photo10 from "../../assets/about-me/10.svg";
import Photo11 from "../../assets/about-me/18.svg";
import Photo12 from "../../assets/about-me/12.svg";
import Photo13 from "../../assets/about-me/13.svg";
import Photo14 from "../../assets/about-me/14.svg";
import Photo15 from "../../assets/about-me/15.svg";
import Photo16 from "../../assets/about-me/16.svg";
import { section } from "framer-motion/client";

const images = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
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
  Photo15,
  Photo16,
];

function PhotoCarousel() {
    const [activeIndex, setActiveIndex] = useState(3); 

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="nutshell"> 
      <h2 className="nutshell__title">When I'm not coding... </h2>
      <p className="nutshell__description">Because a picture is worth a thousand words. </p> 
    <div className="carousel">
      <div className="carousel__track">
        {images.map((src, index) => {
          const distance = (index - activeIndex + images.length) % images.length;
          const wrappedDistance = distance > images.length / 2 ? distance - images.length : distance;

          const scale = wrappedDistance === 0 ? 2 : 1;
          const opacity = Math.abs(wrappedDistance) <= 1.5 ? 1 - Math.abs(wrappedDistance) * 0.5 : 0.5;
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
      </div>
    </div>
    </section>
  );
}

export default PhotoCarousel;
 