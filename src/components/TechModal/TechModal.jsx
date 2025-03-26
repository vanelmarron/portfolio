import "./TechModal.scss";
import TechModalCard from "../TechModalCard/TechModalCard";

function TechModal( {skills} ) {
  return (
    <div className="tech-modal">
        <ul className="tech-modal__list">
            {skills.map((item) => (
                <TechModalCard skill={item} key={item.id} />
            ))}
        </ul>
    </div>
  )
}

export default TechModal
