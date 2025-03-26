import "./TechModalCard.scss";

function TechModalCard({ skill }) {
  return (
    <li className="tech-modal__item">
      <img src={skill.logo} alt={skill.name} className="tech-modal__logo" />
      <div className="tech-modal__text">
        <h4 className="tech-modal__name">{skill.name}</h4>
        <p className="tech-modal__description">{skill.description}</p>
      </div>
    </li>
  )
}

export default TechModalCard
