import "./HomePage.scss";

import Hero from "../../components/Hero/Hero";
import TechStack from '../../components/TechStack/TechStack';
import Projects from '../../components/Projects/Projects';
import AboutMe from '../../components/AboutMe/AboutMe';

function HomePage() {
  return (
    <main className="homepage">
      <Hero />
      <TechStack />
      <Projects />
      <AboutMe />
    </main>
  )
}

export default HomePage
