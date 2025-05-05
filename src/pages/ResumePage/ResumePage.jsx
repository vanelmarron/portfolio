import "./ResumePage.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import downloadIcon from "../../assets/icons/download.svg";

function ResumePage() {

  const { t } = useTranslation('resume');

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [activeTab, setActiveTab] = useState("experience");

  return (
    <main className="resume">
      <div className="resume__title-wrapper">
        <h1 className="resume__title">{t('resume.title')}</h1>
        <Link
          to="https://drive.google.com/file/d/1ZxDeP1PqH5sDgHyr5yGuHnaWGI7ECSu8/view?usp=sharing"
          target="blank"
        >
      
            <img
              src={downloadIcon}
              alt="Download"
              className="resume__download-icon"
            />
  
        </Link>
      </div>

      <ul className="resume__nav">
        <li
          className={`resume__nav-item ${
            activeTab === "experience" ? "resume__nav-item--active" : ""
          }`}
          onClick={() => setActiveTab("experience")}
        >
          {t('resume.experience.title')}
        </li>
        <li
          className={`resume__nav-item ${
            activeTab === "education" ? "resume__nav-item--active" : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
          {t('resume.education.title')}
        </li>
      </ul>
      {activeTab === "experience" && <Experience />}
      {activeTab === "education" && <Education />}
    </main>
  );
}

export default ResumePage;
