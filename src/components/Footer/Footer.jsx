import "./Footer.scss"
import { Link } from "react-router-dom";

import linkedIn from "../../assets/icons/linkedin.svg";
import gitHub from "../../assets/images/github.svg";
import email from "../../assets/icons/contact-me.svg";
import resume from "../../assets/icons/about-me.svg";

function Footer() {
  return (
    <footer className="footer">
        <p className="footer__rights">&copy; 2025. All rights reserved </p>
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
        </ul>
      
    </footer>
  )
}

export default Footer
