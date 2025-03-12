import "./TechStack.scss"
import TechCard from '../TechCard/TechCard';

import reactLogo from "../../assets/images/react.svg";
import javascriptLogo from "../../assets/images/js.svg";
import mySqlLogo from "../../assets/images/mysql.svg";
import scssLogo from "../../assets/images/scss2.svg";
import nodeLogo from "../../assets/images/node-js.svg";
import htmlLogo from "../../assets/images/html.svg";
import expressLogo from "../../assets/images/express.svg";
import githubLogo from "../../assets/images/github.svg";

const images = [
    reactLogo, 
    javascriptLogo, 
    mySqlLogo, 
    scssLogo, 
    nodeLogo, 
    htmlLogo,
    expressLogo,
    githubLogo
]

function TechStack() {
  return (
    <section className="tech-stack">
        <h2 className="tech-stack__title">My Toolbox</h2>
        <div className="tech-stack__wrapper">
      <ul className="tech-stack__list">
    {[...images, ...images, ...images, ...images].map((item, idx) => (
        <TechCard image={item} key={idx} />
    ))}
      </ul>
      </div>
    </section>
  )
}

export default TechStack
