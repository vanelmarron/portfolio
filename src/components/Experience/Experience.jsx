import "./Experience.scss";
import { Link } from "react-router-dom";

import downloadIcon from "../../assets/icons/download.svg";

function Experience() {
  return (
    <section className="experience">
      <article className="experience__position">
        <h2 className="experience__role">Marketing & GRA Specialist | Giant Group Canada</h2>
        <h3 className="experience__timeframe">MAR 2019 - NOV 2024, NORTH VANCOUVER, BC</h3>
        <ul className="experience__achievements">
          <li className="experience__item">
            Managed and optimized the company website, localizing 5 to 10
            product launch content pieces annually and enhancing user
            experiences to increase engagement and conversion rates.
          </li>
          <li className="experience__item">
            Directed the Giant Retail Academy, overseeing the distribution and
            localization of weekly educational content and launching two yearly
            incentive programs.
          </li>
          <li className="experience__item">
            Developed strategic initiatives to strengthen product distribution
            and elevate brand presence across retail channels.
          </li>
          <li className="experience__item">
            Spearheaded 8 to 10 annual collaborations with athletes, media, and
            event organizers to increase brand visibility and drive customer
            acquisition.
          </li>
        </ul>
      </article>
      <article className="experience__position">
        <h2 className="experience__role">Inside Sales Representative | Giant Group Canada</h2>
        <h3 className="experience__timeframe">SEP 2017 - MAR 2019, NORTH VANCOUVER, BC</h3>
        <ul className="experience__achievements">
          <li className="experience__item">
          Set and achieved annual sales growth targets of 20%, consistently surpassing goals by over 5% for two consecutive years.
          </li>
          <li className="experience__item">
          Provided proactive communication and support, fostering long-term partnerships with retail partners and customers.
          </li>
        </ul>
      </article>
      <article className="experience__position">
        <h2 className="experience__role">Assistant Manager | Mission Springs Group</h2>
        <h3 className="experience__timeframe">JAN 2017 - AUG 2017, MISSION, BC</h3>
        <ul className="experience__achievements">
          <li className="experience__item">
          Managed and led a front-of-house team of over 20 staff members, implementing service protocols to enhance customer satisfaction.
          </li>
          <li className="experience__item">
          Managed front-of-house and back-of-house operations to seamlessly execute events and group functions, ensuring a smooth and efficient guest experience.
          </li>
        </ul>
        <Link to="https://drive.google.com/file/d/1Y8-UEmFT_-Mho6_ePL8eIZX4zE6xTmMy/view?usp=sharing">
        <button className="experience__button" target="blank">
            <img src={downloadIcon} alt="Download" className="experience__download-icon"/>
        </button>
        </Link>
      </article>
    </section>
  );
}

export default Experience;
