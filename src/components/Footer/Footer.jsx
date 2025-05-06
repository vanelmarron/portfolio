import "./Footer.scss"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

import linkedIn from "../../assets/icons/linkedin.svg";
import gitHub from "../../assets/images/github.svg";
import email from "../../assets/icons/contact-me.svg";
import language from "../../assets/icons/language.svg";

function Footer({ locales }) {

  const { t } = useTranslation('contact')
  return (
    <footer className="footer">
        <p className="footer__rights">&copy; {t('footer.rights')}</p>
        <ul className="footer__contact">
          <Link to="https://www.linkedin.com/in/vanessa-lebrun/" target="_blank">
            <li className="footer__item">
                <img src={linkedIn} alt="LinkedIn" className="footer__icon"/>
                <p className="footer__text">LinkedIn</p>
            </li>
            </Link>
            <Link to="https://github.com/vanelmarron" target="_blank">
            <li className="footer__item">
            <img src={gitHub} alt="GitHub" className="footer__icon"/>
            <p className="footer__text">GitHub</p>
            </li>
            </Link>
            <Link to="/contact">
            <li className="footer__item">
                <img src={email} alt="Email" className="footer__icon" />
                <p className="footer__text">Email</p>
            </li>
            </Link>
            <li className="footer__item footer__item--mobile">
            <img src={language} alt="Language" className="footer__icon" />
            <ul className="mobile-lang__list">
              {Object.keys(locales).map((locale) => (
                <li key={locale} className={`mobile-lang__item ${
                  i18n.resolvedLanguage === locale
                    ? "mobile-lang__item--active"
                    : ""
                }`}>
                  <button
                    className={`mobile-lang__button ${
                      i18n.resolvedLanguage === locale
                        ? "mobile-lang__button--active"
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
      
    </footer>
  )
}

export default Footer
