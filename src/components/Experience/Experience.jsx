import "./Experience.scss";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation("resume");

  return (
    <section className="experience">
      <article className="experience__position">
        <h2 className="experience__role">
         {t('resume.experience.webdev.title')}
        </h2>
        <h3 className="experience__employer">{t('resume.experience.webdev.employer')}</h3>
        <h4 className="experience__timeframe">{t('resume.experience.webdev.date')}</h4>
        <ul className="experience__achievements">
          <li className="experience__item">
          {t('resume.experience.webdev.experience1')}
          </li>
          <li className="experience__item">
          {t('resume.experience.webdev.experience2')}
          </li>
          <li className="experience__item">
          {t('resume.experience.webdev.experience3')}
          </li>
          <li className="experience__item">
          {t('resume.experience.webdev.experience4')}
          </li>
        </ul>
        <ul className="experience__skills-list">
          <li className="experience__skills-item">{t('resume.experience.webdev.skill1')}</li>
          <li className="experience__skills-item">{t('resume.experience.webdev.skill2')}</li>
          <li className="experience__skills-item">{t('resume.experience.webdev.skill3')}</li>
          <li className="experience__skills-item">{t('resume.experience.webdev.skill4')}</li>
        </ul>
      </article>
      <article className="experience__position">
        <h2 className="experience__role">{t('resume.experience.marketing.title')}</h2>
        <h3 className="experience__employer">{t('resume.experience.marketing.employer')}</h3>
        <h4 className="experience__timeframe">
        {t('resume.experience.marketing.date')}
        </h4>
        <ul className="experience__achievements">
          <li className="experience__item">
          {t('resume.experience.marketing.experience1')}
          </li>
          <li className="experience__item">
          {t('resume.experience.marketing.experience2')}
          </li>
          <li className="experience__item">
          {t('resume.experience.marketing.experience3')}
          </li>
          <li className="experience__item">
          {t('resume.experience.marketing.experience4')}
          </li>
        </ul>
        <ul className="experience__skills-list">
          <li className="experience__skills-item">{t('resume.experience.marketing.skill1')}</li>
          <li className="experience__skills-item">{t('resume.experience.marketing.skill2')}</li>
          <li className="experience__skills-item">{t('resume.experience.marketing.skill3')}</li>
          <li className="experience__skills-item">{t('resume.experience.marketing.skill4')}</li>
        </ul>
      </article>
      <article className="experience__position">
        <h2 className="experience__role">{t('resume.experience.inside-sales.title')}</h2>
        <h3 className="experience__employer">{t('resume.experience.inside-sales.employer')}</h3>
        <h4 className="experience__timeframe">
        {t('resume.experience.inside-sales.date')}
        </h4>
        <ul className="experience__achievements">
          <li className="experience__item">
          {t('resume.experience.inside-sales.experience1')}
          </li>
          <li className="experience__item">
          {t('resume.experience.inside-sales.experience2')}
          </li>
        </ul>
        <ul className="experience__skills-list">
          <li className="experience__skills-item">{t('resume.experience.inside-sales.skill1')}</li>
          <li className="experience__skills-item">{t('resume.experience.inside-sales.skill2')}</li>
          <li className="experience__skills-item">{t('resume.experience.inside-sales.skill3')}</li>
          <li className="experience__skills-item">{t('resume.experience.inside-sales.skill4')}</li>
        </ul>
      </article>
      <article className="experience__position">
        <h2 className="experience__role">{t('resume.experience.assistant-manager.title')}</h2>
        <h3 className="experience__employer">{t('resume.experience.assistant-manager.employer')}</h3>
        <h3 className="experience__timeframe">
        {t('resume.experience.assistant-manager.date')}
        </h3>
        <ul className="experience__achievements">
          <li className="experience__item">
          {t('resume.experience.assistant-manager.experience1')}
          </li>
          <li className="experience__item">
          {t('resume.experience.assistant-manager.experience2')}
          </li>
        </ul>
        <ul className="experience__skills-list">
          <li className="experience__skills-item">{t('resume.experience.assistant-manager.skill1')}</li>
          <li className="experience__skills-item">{t('resume.experience.assistant-manager.skill2')}</li>
          <li className="experience__skills-item">{t('resume.experience.assistant-manager.skill3')}</li>
          <li className="experience__skills-item">{t('resume.experience.assistant-manager.skill4')}</li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;
