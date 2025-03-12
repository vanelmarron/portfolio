import "./Header.scss";

import React from "react";
import contactMe from "../../assets/icons/contact-me.svg";
import interestIcon from "../../assets/icons/interests.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import aboutMe from "../../assets/icons/about-me.svg";
import webLogo from "../../assets/icons/weblogo.svg";
import headshot from "../../assets/images/headshot-teal.png"

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
      <img src={headshot} alt="" className="header__headshot" />
      <p className="header__name">VANESSA LEBRUN</p>
      </div>
      <ul className="header__list">
        <li className="header__item">
          <img src={aboutMe} alt="About me" className="header__icon"/> 
          <p className="header__text">About Me</p>
        </li>
        <li className="header__item">
          <img src={projectsIcon} alt="Projects" className="header__icon"/> 
          <p className="header__text">Projects</p>
        </li>
        <li className="header__item">
          <img src={interestIcon} alt="Interests" className="header__icon"/> 
          <p className="header__text">Interests</p>
        </li>
        <li className="header__item">
          <img src={contactMe} alt="Contact" className="header__icon"/> 
          <p className="header__text">Contact</p>
        </li>
      </ul>
    </header>
  );
}

export default Header;
