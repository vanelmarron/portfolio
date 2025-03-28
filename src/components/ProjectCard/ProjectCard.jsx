import "./ProjectCard.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

import ProjectDescription from "../ProjectDescription/ProjectDescription";

import tumblingGoat from "../../assets/images/tumbling-goat.png";
import inStock from "../../assets/images/instock.png";
import bandsite from "../../assets/images/bandsite.png";
import tumblingDetails from "../../assets/images/tumbling-details.png";
import bandsiteDetails from "../../assets/images/bandsite-details.png";
import instockDetails from "../../assets/images/instock-details.png";

const projects = [
  {
    id: 1,
    image: bandsite,
    details: bandsiteDetails,
    name: "Bandsite",
    url: "https://drive.google.com/file/d/1GKP7JrQAiZ3U_qR1ricPlBDNiiWJHSdN/view?usp=sharing",
    title: "Marketing & Promotion",
    description:
      "A fully responsive website for a fictional music band, featuring media-rich content, dynamic events, and an interactive fan engagement section.",
    highlights: "Responsive Design, Soundcloud Embedded Player, Concert Schedule, Community Engagement",
    stack: "HTML, SCSS, JavaScript",
    cta: "Demo",
  },
  {
    id: 2,
    image: tumblingGoat,
    details: tumblingDetails,
    name: "Tumbling Goat",
    url: "https://github.com/vanelmarron/tumbling-goat-frontend",
    title: "E-Commerce Platform",
    description:
      "An e-commerce platform that empowers artists by providing a seamless marketplace to sell their work, while integrating powerful search and recommendation features.",
    highlights: 
      "Dynamic Filters, Dropdown Menu, Customers Reviews",
    stack: "HTML, SCSS, JavaScript, Node.js, React.js, MySQL, Google API, Jira, Canva",
    cta: "Visit Repo",
  },
  {
    id: 3,
    image: inStock,
    details: instockDetails,
    name: "InStock",
    url: "https://drive.google.com/file/d/1ANg1c8j8DgIymswkjoDPM0BJWgNb9mpz/view?usp=sharing",
    title: "Inventory Management System",
    description:
      "An Inventory Management App designed to streamline stock tracking and warehouse operations through intuitive UI and CRUD functionalities.",
    highlights: "Responsive Design, Add Item, Delete Item, Edit Item, Dynamic Inventory",
    stack: "HTML, SCSS, JavaScript, Node.js, Express, React.js, MySQL, Jira, Figma",
    cta: "DEMO"
  },
];

function ProjectCard() {

  const [activeProject, setActiveProject ] = useState(null);

  return (
    <>
      {projects.map((project) => (
        <li key={project.id} className="project-item">
          <motion.div
            key={project.id}
            className="project-item__front"
            onClick={() => setActiveProject(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="project-item__image"
            />
          </motion.div>
        </li>
      ))}
    <ReactModal
        isOpen={!!activeProject} 
        onRequestClose={() => setActiveProject(null)}
        className="project-modal"
        overlayClassName="project-modal__overlay"
      >
        {activeProject && (
          <ProjectDescription project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </ReactModal>
    </>
  );
}

export default ProjectCard;
