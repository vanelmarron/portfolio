import "./ResumePage.scss"

import { useState } from "react";

import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";

function ResumePage() {

    const [activeTab, setActiveTab] = useState("experience");

  return (
    <main className="resume">
        <h1 className="resume__title">Resume</h1>
      <ul className="resume__nav">
        <li className={`resume__nav-item ${
            activeTab === "experience" ? "resume__nav-item--active" : ""
          }`}
          onClick={() => setActiveTab("experience")}>Experience</li>
        <li className={`resume__nav-item ${
            activeTab === "education" ? "resume__nav-item--active" : ""
          }`}
          onClick={() => setActiveTab("education")}>Education</li>
      </ul>
      {activeTab === "experience" && <Experience />}
      {activeTab === "education" && <Education />}
    </main>
  )
}

export default ResumePage
