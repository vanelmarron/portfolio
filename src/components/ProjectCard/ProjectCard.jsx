import "./ProjectCard.scss";
import React from 'react';
import tumblingGoat from "../../assets/images/tumbling-goat.png";
import inStock from "../../assets/images/instock.png";
import tumblingLogo from "../../assets/logos/tumbling_logo.png";
import instockLogo from "../../assets/logos/instock_logo.svg";

function ProjectCard() {
  return (
    <div className="projects__wrapper">
      {[
        {
          image: tumblingGoat,
          logo: tumblingLogo,
          title: "E-Commerce",
          description:
            "By streamlining marketing and sales efforts, the app empowers artists to focus on their craft while reaching a broader, more engaged audience.",
          stack: "TechStack: HTML, SCSS, Javascript, Node.js and React.js.",
          api: "APIs: Node.js Express, Google API",
        },
        {
          image: inStock,
          logo: instockLogo,
          title: "Inventory & Warehouse Management",
          description:
            "An Inventory Management App is a streamlined solution designed to help businesses efficiently manage their stock using CRUD operations.",
          stack: "TechStack: HTML, SCSS, Javascript, Node.js and React.js.",
          api: "APIs: Node.js Express",
        },
      ].map((project, index) => (
        <div className="project-item" key={index}>
          <img
            src={project.image}
            alt={project.title}
            className="project-item__image"
          />
          <div className="project-item__details">
            <img className="project-item__logo" src={project.logo} alt={project.title} />
            <h3 className="project-item__title">{project.title}</h3>
            <p className="project-item__description">{project.description}</p>
            <p className="project-item__stack">{project.stack}</p>
            <p className="project-item__api">{project.api}</p>
            <button className="project-item__button">Visit the repository</button>
          </div>
        </div>
      ))}
    </div>

  )
}

export default ProjectCard
