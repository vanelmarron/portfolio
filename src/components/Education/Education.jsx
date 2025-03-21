import "./Education.scss"
import { Link } from "react-router-dom";

import downloadIcon from "../../assets/icons/download.svg";

function Education() {
  return (
    <section className="education">
      <article className="education__position">
        <h2 className="education__role">Software Engineering Bootcamp | BrainStation</h2>
        <h3 className="education__timeframe">NOV 2024 - FEB 2025, VANCOUVER, BC</h3>
        <ul className="education__achievements">
          <li className="education__item">
          Gained a strong foundation in computer science fundamentals, including HTML, CSS, and JavaScript.

          </li>
          <li className="education__item">
          Built and consumed RESTful APIs for seamless data exchange between front-end and back-end.

          </li>
          <li className="education__item">
          Learned database management with MySQL, including schema design, queries, and optimization.

          </li>
          <li className="education__item">
          Implemented version control best practices using Git and GitHub for collaboration and project management.
          </li>
          <li className="education__item">
          Applied Agile development methodologies, working in sprints and participating in code reviews.
          </li>
        </ul>
      </article>
      <article className="education__position">
        <h2 className="education__role">Consumption Sciences | Laval University</h2>
        <h3 className="education__timeframe">SEP 2009 - APR 2013, NORTH VANCOUVER, BC</h3>
        <ul className="education__achievements">
          <li className="education__item">
          Comprehensive program focused on understanding and analyzing consumer behavior, market dynamics, and business strategies.
          </li>
          <li className="education__item">
          Completed courses in Consumer Behavior, Consumer Research, Distribution, Consumer Law, and Communication.
          </li>
          <li className="education__item">
          Developed expertise in market segmentation, customer needs analysis, and relationship management.
          </li>
          <li className="education__item">
          Acquired knowledge in planning, marketing, and quality management for both commercial and non-profit organizations.
          </li>
        </ul>
        <Link to ="https://drive.google.com/file/d/1Y8-UEmFT_-Mho6_ePL8eIZX4zE6xTmMy/view?usp=sharing">
        <button className="experience__button">
                    <img src={downloadIcon} alt="Download" className="experience__download-icon"/>
                </button>
                </Link>
      </article>
    </section>
  )
}

export default Education
