import "./Projects.scss"
import { useRef } from 'react'
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion, useInView } from "framer-motion";

function Projects() {

  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { amount: 1, once: true });

  return (
    <motion.section className="projects" id="projects">
        <h2 className="projects__name">My Projects</h2>
        <motion.ul className="projects__list" ref={projectRef}  initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 1 : 0 }} 
    transition={{ duration: 2 }}>
          <ProjectCard />
        </motion.ul>
    </motion.section>
  )
}

export default Projects
