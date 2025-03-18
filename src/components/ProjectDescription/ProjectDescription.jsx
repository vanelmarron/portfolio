import "./ProjectDescription.scss"
import React from 'react'

import highlightIcon from "../../assets/icons/highlight.svg";
import techIcon from "../../assets/icons/stack.svg";

function ProjectDescription({ project }) {
  return (
    <div className="active-project">
        <h2 className="active-project__title">{project.name}</h2>
        <div className="active-project__wrapper">
            <div className="active-project__intro">
        <h3>{project.title}</h3>
        <p className="active-project__description">{project.description}</p>
        <div className="active-project__details">
        <div className="features">
            <img src={highlightIcon} alt="Highlights" className="features__icon" />
                <p className="features__item">{project.highlights}</p>
        </div>
        <div className="tech">
            <img src={techIcon} alt="Tech Stack" className="tech__icon" />
                <p className="tech__item"> {project.stack}</p>
        </div>
      </div>
        <div className="active-project__cta active-project__cta--tablet">
        <button className="active-project__close">Close</button>
        <button className="active-project__demo">{project.cta}</button>
      </div>
        </div>
        <img className="active-project__image active-project__image--tablet" src={project.details} alt={project.name} />
        </div>
        
     
      <img className="active-project__image active-project__image--mobile" src={project.details} alt={project.name} />
      <div className="active-project__cta active-project__cta--mobile">
        <button className="active-project__close">Close</button>
        <button className="active-project__demo">Demo</button>
      </div>
    </div>
  )
}

export default ProjectDescription
