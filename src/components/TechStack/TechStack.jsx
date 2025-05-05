import "./TechStack.scss"
import TechCard from '../TechCard/TechCard';
import TechModal from "../TechModal/TechModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

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
import adobeLogo from "../../assets/images/adobe.svg";
import figmaLogo from "../../assets/images/figma.svg";


function TechStack() {

  const { t } = useTranslation("homepage");

  const skills = [
    {
      id: "b1c973b1-ce0b-4f16-8180-9f28adf95790", 
      logo: reactLogo, 
      name: "React.js",
      description: t('toolbox.react')
    }, 
    {
      id: "38fffab8-7332-4543-8f15-beca8dd1cb17", 
      logo: javascriptLogo, 
      name: "Javascript",
      description: t('toolbox.javascript')
    },
    {
      id: "ec604ee5-f6fe-424f-8e02-cd819438b9bc", 
      logo: htmlLogo,
      name: "HTML", 
      description: t('toolbox.html'), 
    }, 
    {
      id: "cc4ff028-1c91-466f-a29f-cd6030408944", 
      logo: scssLogo, 
      name: "Sass", 
      description: t('toolbox.scss')
    }, 
    {
      id: "4f5ed6d7-6029-47f8-962d-ebb822deaba9", 
      logo: mySqlLogo, 
      name: "MySQL", 
      description: t('toolbox.mysql')
    }, 
    {
      id: "ec763bb2-d13f-4c28-ab76-b2b4909045e4", 
      logo: githubLogo,
      name: "GitHub", 
      description: t('toolbox.github')
    }, 
    {
      id: "ab04d53e-26c8-4a2f-a088-fa63c40229d9", 
      logo: nodeLogo, 
      name: "Node.js", 
      description: t('toolbox.node')
    }, 
    {
      id: "78c13812-eadc-4517-9346-991ff8da7df4", 
      logo: expressLogo,
      name: "Express.JS", 
      description: t('toolbox.express')
    }, 
    {
      id: "8e06b58c-d827-40c4-9023-b2e0ab581689", 
      logo: PHPLogo,
      name: "PHP", 
      description: t('toolbox.php')
    }, 
    {
      id: "b6115c8c-3b91-46bf-ba8f-9cc18a9fcfe9", 
      logo: jiraLogo, 
      name: "Jira", 
      description: t('toolbox.jira')
    }, 
    {
      id: "aea126f9-3ddc-4720-8388-7e38b719ceed", 
      logo: adobeLogo, 
      name: "Adobe Express", 
      description: t('toolbox.adobe')
    }, 
    {
      id: "193942cc-c187-4bea-adb9-659bea6c8cb6", 
      logo: figmaLogo, 
      name: "Figma", 
      description: t('toolbox.figma')
    }
]

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "0.80 start"]
  });

  const opacity = useTransform(scrollYProgress, [0,1], [1, 0]);

  return (
    <section className="tech-stack" >
    <h2 className="tech-stack__title">{t('toolbox.title')}</h2>
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
