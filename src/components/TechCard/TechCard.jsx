import "./TechCard.scss"

function TechCard({ image }) {
    
  return (
    <li className="tech-card">
      <img src={image} alt={image} className="tech-card__image" draggable="false" />
    </li>
  )
}

export default TechCard
