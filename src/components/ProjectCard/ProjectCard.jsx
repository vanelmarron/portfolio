import "./ProjectCard.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
import {useTranslation} from "react-i18next"

import ProjectDescription from "../ProjectDescription/ProjectDescription";

import tumblingGoat from "../../assets/images/tumbling-goat.png";
import inStock from "../../assets/images/instock.png";
import bandsite from "../../assets/images/bandsite.png";
import tumblingDetails from "../../assets/images/tumbling-details.png";
import bandsiteDetails from "../../assets/images/bandsite-details.png";
import instockDetails from "../../assets/images/instock-details.png";
import recovery from "../../assets/images/recovery-rides.png";
import recoveryDetails from "../../assets/images/recovery-rides-details.png";

function ProjectCard() {

  const { t } = useTranslation('homepage');

  const projects = [
    {
      id: 1,
      image: bandsite,
      details: bandsiteDetails,
      name: "Bandsite",
      url: "https://drive.google.com/file/d/1GKP7JrQAiZ3U_qR1ricPlBDNiiWJHSdN/view?usp=sharing",
      title: t('projects.bandsite.title'),
      description: t('projects.bandsite.description'),
      highlights: t('projects.bandsite.highlights'),
      stack: t('projects.bandsite.tech'),
      cta: t('projects.bandsite.cta'),
    },
    {
      id: 2,
      image: tumblingGoat,
      details: tumblingDetails,
      name: "Tumbling Goat",
      url: "https://github.com/vanelmarron/tumbling-goat-frontend",
      title: t('projects.tumbling-goat.title'),
      description: t('projects.tumbling-goat.description'),
      highlights: t('projects.tumbling-goat.highlights'),
      stack: t('projects.tumbling-goat.tech'),
      cta: t('projects.tumbling-goat.cta'),
    },
    {
      id: 3,
      image: inStock,
      details: instockDetails,
      name: "InStock",
      url: "https://drive.google.com/file/d/1ANg1c8j8DgIymswkjoDPM0BJWgNb9mpz/view?usp=sharing",
      title: t('projects.instock.title'),
      description: t('projects.instock.description'),
      highlights: t('projects.instock.highlights'),
      stack: t('projects.instock.tech'),
      cta: t('projects.instock.cta')
    },
    {
      id: 4, 
      image: recovery, 
      details: recoveryDetails, 
      name: "Recovery Rides", 
      url: "https://www.recoveryrides.ca/", 
      title: t('projects.recovery-rides.title'), 
      description: t('projects.recovery-rides.description'), 
      highlights: t('projects.recovery-rides.highlights'), 
      stack: t('projects.recovery-rides.tech'), 
      cta: t('projects.recovery-rides.cta')
    }
  ];

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
