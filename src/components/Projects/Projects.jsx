import "./Projects.scss"
import {useRef} from 'react'
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";


function Projects() {

  const projectRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["bottom 80vh", "bottom 20vh"]
  });

  const opacity = useTransform(scrollYProgress, [0,1], [1, 0]);

  return (
    <motion.section className="projects" id="projects" ref={projectRef} style={{opacity}}>
        <h2 className="projects__name">My Projects</h2>
        <ProjectCard />
    </motion.section>
  )
}

export default Projects
