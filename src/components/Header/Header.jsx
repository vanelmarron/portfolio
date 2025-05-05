import "./Header.scss";

import { HashLink } from "react-router-hash-link";
import { Link, useLocation, useNavigate } from "react-router-dom";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
 
import contactMe from "../../assets/icons/contact-me.svg";
import interestIcon from "../../assets/icons/interests.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import resumeIcon from "../../assets/icons/about-me.svg";
import languageIcon from "../../assets/icons/language.svg";
import headshot from "../../assets/images/headshot-teal.png";

function Header({ locales }) {
  const { t } = useTranslation('contact')
  const location = useLocation();
  const navigate = useNavigate();

  const handleProjectsClick = (event) => {
    if (location.pathname !== "/") {
      event.preventDefault();
      navigate("/");
      setTimeout(() => {
        window.location.hash = "#projects";
      }, 100);
    }
  };

  const handleAboutClick = (event) => {
    if (location.pathname !== "/") {
      event.preventDefault();
      navigate("/");
      setTimeout(() => {
        window.location.hash = "#about";
      }, 100);
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={headshot} alt="" className="header__headshot" />
          <p className="header__name">VANESSA LEBRUN</p>
        </div>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          <HashLink smooth to="#projects" onClick={handleProjectsClick}>
            <li className="header__item">
              <img src={projectsIcon} alt="Projects" className="header__icon" />
              <p className="header__text">{t('header.projects')}</p>
            </li>
          </HashLink>
          <HashLink smooth to="#about" onClick={handleAboutClick}>
            <li className="header__item">
              <img src={interestIcon} alt="About Me" className="header__icon" />
              <p className="header__text">{t('header.about-me')}</p>
            </li>
          </HashLink>
          <Link to="/contact">
            <li className="header__item">
              <img src={contactMe} alt="Contact" className="header__icon" />
              <p className="header__text">{t('header.contact')}</p>
            </li>
          </Link>
          <Link to="/resume">
            <li className="header__item">
              <img src={resumeIcon} alt="Resume" className="header__icon" />
              <p className="header__text">{t('header.resume')}</p>
            </li>
          </Link>
          <li className="header__item">
            <img src={languageIcon} alt="Resume" className="header__icon" />
            <ul className="language__list">
              {Object.keys(locales).map((locale) => (
                <li key={locale} className={`language__item ${
                  i18n.resolvedLanguage === locale
                    ? "language__item--active"
                    : ""
                }`}>
                  <button
                    className={`language__button ${
                      i18n.resolvedLanguage === locale
                        ? "language__button--active"
                        : ""
                    }`}
                    type="submit"
                    onClick={() => i18n.changeLanguage(locale)}
                  >
                    {locales[locale].title}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
