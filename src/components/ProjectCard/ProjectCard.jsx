import "./ProjectCard.scss";
import { useState } from 'react';
import { motion } from "framer-motion";

import tumblingGoat from "../../assets/images/tumbling-goat.png";
import inStock from "../../assets/images/instock.png";
import tumblingLogo from "../../assets/logos/tumbling_logo.png";
import instockLogo from "../../assets/logos/instock_logo.svg";

const projects = [
  {
    image: tumblingGoat,
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

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="projects__wrapper">
      
      {projects.map((project, index) => { 
        const position = index - activeIndex;

        return ( 
          <motion.div
          key={index}
          className="project-item"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            x: `${position * 30}%`, 
            opacity: position === 0 ? 1 : 0.5, 
            scale: position === 0 ? 1 : 0.60, 
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
          onClick={() => handleClick(index)}
          style={{
            zIndex: position === 0 ? 2 : 1,
          }}
        >
          <img src={project.image} alt={project.title} className="project-item__image" />
          <div className="project-item__details">
            <img className="project-item__logo" src={project.logo} alt={project.title} />
            <h3 className="project-item__title">{project.title}</h3>
            <p className="project-item__description">{project.description}</p>
            <p className="project-item__stack">{project.stack}</p>
            <p className="project-item__api">{project.api}</p>
            <button className="project-item__button">Learn More</button>
          </div>
        </motion.div>
      );
    })}
  </div>
);
}

export default ProjectCard
