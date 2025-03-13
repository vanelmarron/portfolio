import "./Header.scss";

import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import React from "react";
import contactMe from "../../assets/icons/contact-me.svg";
import interestIcon from "../../assets/icons/interests.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import headshot from "../../assets/images/headshot-teal.png"

function Header() {
  return (
    <header className="header">
      <Link to="/">
      <div className="header__logo">
      <img src={headshot} alt="" className="header__headshot" />
      <p className="header__name">VANESSA LEBRUN</p>
      </div>
      </Link>
      <ul className="header__list">
        <HashLink smooth to="#projects">
        <li className="header__item">
          <img src={projectsIcon} alt="Projects" className="header__icon"/> 
          <p className="header__text">Projects</p>
        </li>
        </HashLink>
        
        <li className="header__item">
          <img src={interestIcon} alt="About Me" className="header__icon"/> 
          <p className="header__text">About Me</p>
        </li>
        <Link to="/contact">
        <li className="header__item">
          <img src={contactMe} alt="Contact" className="header__icon"/> 
          <p className="header__text">Contact</p>
        </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
