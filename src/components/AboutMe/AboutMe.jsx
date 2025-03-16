import "./AboutMe.scss";
import { useState } from "react";

import openIcon from "../../assets/icons/open.svg";
import collapseIcon from "../../assets/icons/collapse.svg";

import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";

function AboutMe() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  const items = ["Bikes", "Yoga", "Language", "Cooking", "Travel"]

  return (
    <section className="about" id="about">
        <div className="about__intro">
        <h2 className="about__name">About Me</h2>
        </div>
        <ul className="about__list">
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? "about__item about__item--selected" : "about__item"} onClick={() => handleClick(index)}>
              <img src={activeIndex === index ? collapseIcon : openIcon} alt="Learn More" className={activeIndex === index ? "about__icon about__icon--selected" : "about__icon"} />
              <p className={activeIndex === index ? "about__element about__element--selected" : "about__element"}>{item}</p>
            </li>
          ))}
        </ul>

        <PhotoCarousel />
    </section>
  );
}

export default AboutMe;
