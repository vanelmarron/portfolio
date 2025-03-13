import "./Header.scss";

import { HashLink } from "react-router-hash-link";
import { Link, useLocation, useNavigate } from "react-router-dom";

import contactMe from "../../assets/icons/contact-me.svg";
import interestIcon from "../../assets/icons/interests.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import headshot from "../../assets/images/headshot-teal.png"

function Header() {

  const location = useLocation();
  const navigate = useNavigate();

  const handleProjectsClick = (event) => {
    if (location.pathname !== "/") {
      event.preventDefault();
      navigate("/");
        setTimeout(() => {
          window.location.hash = "#projects";
        }, 100)
    }
  }

  const handleAboutClick = (event) => {
    if (location.pathname !== "/") {
      event.preventDefault();
      navigate("/");
      setTimeout(() => {
        window.location.hash = "/about";
      }, 100)
    }
  }

  return (
    <header className="header">
      <Link to="/">
      <div className="header__logo">
      <img src={headshot} alt="" className="header__headshot" />
      <p className="header__name">VANESSA LEBRUN</p>
      </div>
      </Link>
      <ul className="header__list">
        <HashLink smooth to="#projects" onClick={handleProjectsClick}>
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
