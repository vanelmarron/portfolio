import "./TechStack.scss"
import TechCard from '../TechCard/TechCard';
import TechModal from "../TechModal/TechModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import reactLogo from "../../assets/images/react.svg";
import javascriptLogo from "../../assets/images/js.svg";
import mySqlLogo from "../../assets/images/mysql.svg";
import scssLogo from "../../assets/images/scss2.svg";
import nodeLogo from "../../assets/images/node-js.svg";
import htmlLogo from "../../assets/images/html.svg";
import expressLogo from "../../assets/images/express.svg";
import githubLogo from "../../assets/images/github.svg";
import PHPLogo from "../../assets/images/php.svg";
import jiraLogo from "../../assets/images/jira.svg";
import canvaLogo from "../../assets/images/canva.svg";
import figmaLogo from "../../assets/images/figma.svg";

const skills = [
    {
      id: "b1c973b1-ce0b-4f16-8180-9f28adf95790", 
      logo: reactLogo, 
      name: "React.js",
      description: "User Interface Library"
    }, 
    {
      id: "38fffab8-7332-4543-8f15-beca8dd1cb17", 
      logo: javascriptLogo, 
      name: "Javascript",
      description: "Programming Language"
    },
    {
      id: "ec604ee5-f6fe-424f-8e02-cd819438b9bc", 
      logo: htmlLogo,
      name: "HTML", 
      description: "Standard markup language", 
    }, 
    {
      id: "cc4ff028-1c91-466f-a29f-cd6030408944", 
      logo: scssLogo, 
      name: "Sass", 
      description: "CSS Preprocessor Spripting Language"
    }, 
    {
      id: "4f5ed6d7-6029-47f8-962d-ebb822deaba9", 
      logo: mySqlLogo, 
      name: "MySQL", 
      description: "Database Management System"
    }, 
    {
      id: "ec763bb2-d13f-4c28-ab76-b2b4909045e4", 
      logo: githubLogo,
      name: "GitHub", 
      description: "Version control system"
    }, 
    {
      id: "ab04d53e-26c8-4a2f-a088-fa63c40229d9", 
      logo: nodeLogo, 
      name: "Node.js", 
      description: "Javascript runtime environment"
    }, 
    {
      id: "78c13812-eadc-4517-9346-991ff8da7df4", 
      logo: expressLogo,
      name: "Express.JS", 
      description: "Web application framework"
    }, 
    {
      id: "8e06b58c-d827-40c4-9023-b2e0ab581689", 
      logo: PHPLogo,
      name: "PHP", 
      description: "Server-side scripting language"
    }, 
    {
      id: "b6115c8c-3b91-46bf-ba8f-9cc18a9fcfe9", 
      logo: jiraLogo, 
      name: "Jira", 
      description: "Project Management Software"
    }, 
    {
      id: "aea126f9-3ddc-4720-8388-7e38b719ceed", 
      logo: canvaLogo, 
      name: "Canva", 
      description: "Graphic design tool"
    }, 
    {
      id: "193942cc-c187-4bea-adb9-659bea6c8cb6", 
      logo: figmaLogo, 
      name: "Figma", 
      description: "Collaborative design tool"
    }
]

function TechStack() {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "0.80 start"]
  });

  const opacity = useTransform(scrollYProgress, [0,1], [1, 0]);

  return (
    <section className="tech-stack" >
    <h2 className="tech-stack__title">My Toolbox</h2>
    <motion.div className="tech-stack__carousel" ref={sectionRef} style={{opacity}}>
        <div className="tech-stack__wrapper">
      <ul className="tech-stack__list">
    {[...skills, ...skills, ...skills, ...skills].map((item, idx) => (
        <TechCard image={item.logo} key={`${item.id}-${idx}`} />
    ))}
      </ul>
      </div>
    </motion.div>
    <TechModal skills={skills} />
    </section>
  )
}

export default TechStack
