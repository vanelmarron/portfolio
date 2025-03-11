import React from 'react'
import Hero from "../../components/Hero/Hero";
import TechStack from '../../components/TechStack/TechStack';
import "./HomePage.scss";

function HomePage() {
  return (
    <main className="homepage">
      <Hero />
      <TechStack/>
    </main>
  )
}

export default HomePage
