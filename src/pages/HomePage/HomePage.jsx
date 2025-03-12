import React from 'react'
import Hero from "../../components/Hero/Hero";
import TechStack from '../../components/TechStack/TechStack';
import Projects from '../../components/Projects/Projects';
import "./HomePage.scss";

function HomePage() {
  return (
    <main className="homepage">
      <Hero />
      <TechStack />
      <Projects />
    </main>
  )
}

export default HomePage
