import "./ProjectCard.scss";
import { useState } from "react";
import { motion } from "framer-motion";

import tumblingGoat from "../../assets/images/tumbling-goat.svg";
import inStock from "../../assets/images/instock.svg";
import bandsite from "../../assets/images/bandsite.svg";
import tumblingLogo from "../../assets/logos/tumbling_logo.png";
import instockLogo from "../../assets/logos/instock_logo.svg";
import forwardArrow from "../../assets/icons/forward.svg";
import backwardArrow from "../../assets/icons/backward.svg";
import hoverForward from "../../assets/icons/forward-hover.svg";
import hoverBackward from "../../assets/icons/backward-hover.svg";

const projects = [
  {
    image: bandsite,
    logo: tumblingLogo,
    title: "Bandsite",
    description: "Website for a music band.",
    stack: "TechStack: HTML, SCSS, JavaScript, Node.js, and React.js.",
    api: "APIs: Node.js Express",
  },
  {
    image: tumblingGoat,
    logo: tumblingLogo,
    title: "E-Commerce",
    description:
      "The app empowers artists to focus on their craft while reaching a broader, more engaged audience.",
    stack: "TechStack: HTML, SCSS, JavaScript, Node.js, and React.js.",
    api: "APIs: Node.js Express, Google API",
  },
  {
    image: inStock,
    logo: instockLogo,
    title: "Inventory & Warehouse Management",
    description:
      "An Inventory Management App that helps businesses manage their stock using CRUD operations.",
    stack: "TechStack: HTML, SCSS, JavaScript, Node.js, and React.js.",
    api: "APIs: Node.js Express",
  },
];

function ProjectCard() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHoveredForward, setIsHoveredForward] = useState(false);
  const [isHoveredBackward, setIsHoveredBackward] = useState(false);

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects__wrapper">
      <img
        src={isHoveredBackward ? hoverBackward : backwardArrow}
        alt="Previous Project"
        className="project-item__back-arrow"
        onClick={prevProject}
        onMouseEnter={() => setIsHoveredBackward(true)}
        onMouseLeave={() => setIsHoveredBackward(false)}
      />
      <motion.div
        key={activeIndex}
        className="project-item"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <img
          src={projects[activeIndex].image}
          alt={projects[activeIndex].title}
          className="project-item__image"
        />
        <div className="project-item__details">
          <img
            className="project-item__logo"
            src={projects[activeIndex].logo}
            alt={projects[activeIndex].title}
          />
          <h3 className="project-item__title">{projects[activeIndex].title}</h3>
          <p className="project-item__description">
            {projects[activeIndex].description}
          </p>
          <p className="project-item__stack">{projects[activeIndex].stack}</p>
          <p className="project-item__api">{projects[activeIndex].api}</p>
          <button className="project-item__button">Learn More</button>
        </div>
      </motion.div>
      <img
        src={isHoveredForward ? hoverForward : forwardArrow }
        alt="Next Project"
        className="project-item__forward-arrow"
        onClick={nextProject}
        onMouseEnter={() => setIsHoveredForward(true)}
        onMouseLeave={() => setIsHoveredForward(false)}
      />
    </div>
  );
}

export default ProjectCard;
