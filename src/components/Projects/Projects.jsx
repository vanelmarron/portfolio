import "./Projects.scss"
import { useRef, useEffect, useState } from 'react'
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

function Projects() { 

  const { t } = useTranslation("homepage");

  const projectRef = useRef(null);
  const [amount, setAmount] = useState(0.5);

  useEffect(() => {
    const updateAmount = () => {
      if (window.innerWidth < 768) {
        setAmount(0.2);
      } else {
        setAmount(0.5);
      }
    }
    updateAmount();
    window.addEventListener("resize", updateAmount)
  }, []);

  const isInView = useInView(projectRef, { amount });

  return (
    <motion.section className="projects" id="projects">
        <h2 className="projects__name">{t('projects.title')}</h2>
        <motion.ul className="projects__list" ref={projectRef}  initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 1 : 0 }} 
    transition={{ duration: 0.5 }}>
          <ProjectCard />
        </motion.ul>
    </motion.section>
  )
}

export default Projects
