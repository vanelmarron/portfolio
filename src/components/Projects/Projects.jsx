import "./Projects.scss"
import React from 'react'
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";

import tumblingGoat from "../../assets/images/tumbling-goat.png"

function Projects() {
  return (
    <section className="projects">
        <h2 className="projects__name">My Projects</h2>
        <ProjectCard />
    </section>
  )
}

export default Projects
