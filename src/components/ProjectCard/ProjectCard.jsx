import "./ProjectCard.scss";
import { useState } from "react";
import { motion } from "framer-motion";

import tumblingGoat from "../../assets/images/tumbling-goat.svg";
import inStock from "../../assets/images/instock.svg";
import bandsite from "../../assets/images/bandsite.svg";
import tumblingDetails from "../../assets/images/tumbling-details.svg";
import bandsiteDetails from "../../assets/images/bandsite-details.svg";
import instockDetails from "../../assets/images/instock-details.svg"
import forwardArrow from "../../assets/icons/forward.svg";
import backwardArrow from "../../assets/icons/backward.svg";
import hoverForward from "../../assets/icons/forward-hover.svg";
import hoverBackward from "../../assets/icons/backward-hover.svg";

const projects = [
  {
    image: bandsite,
    details: bandsiteDetails,
    // title: "Marketing",
    // description: "A fully responsive website for a music band, featuring media-rich content, dynamic events, and an interactive fan engagement section.",
    // stack: "TechStack: HTML, SCSS, JavaScript",
    // skills: "Teamwork, UI/UX Design, Responsive Web Development, JavaScript DOM Manipulation, API Integration, Version Control (Git/GitHub).",
  },
  {
    image: tumblingGoat,
    details: tumblingDetails,
    // logo: tumblingLogo,
    // title: "E-Commerce",
    // description:
    // "An e-commerce platform that empowers artists by providing a seamless marketplace to sell their work, while integrating powerful search and recommendation features.",
    // stack: "TechStack: HTML, SCSS, JavaScript, Node.js, and React.js, MySQL",
    // api: "APIs: Node.js Express, Google API",
    // skills: "Full-Stack Development, RESTful API Integration, Authentication & Authorization, User-Centered Design, Problem-Solving."
  },
  {
    image: inStock,
    details: instockDetails,
    // logo: instockLogo,
    // title: "Inventory & Warehouse Management",
    // description:
    //   "An Inventory Management App designed to streamline stock tracking and warehouse operations through intuitive UI and CRUD functionalities.",
    // stack: "TechStack: HTML, SCSS, JavaScript, Node.js, and React.js.",
    // api: "APIs: Node.js Express",
    // skills: "Collaboration, Version Control (Git/GitHub), Database Management (MySQL), CRUD Operations, API Development, Agile Development."
  }
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
            src={projects[activeIndex].details}
            alt={projects[activeIndex].title}
          />
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
