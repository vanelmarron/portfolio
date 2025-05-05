import "./Education.scss";
import { useTranslation } from "react-i18next";

function Education() {
  const { t } = useTranslation("resume");

  return (
    <section className="education">
      <article className="education__position">
        <h2 className="education__role">{t('resume.education.brainstation.title')}</h2>
        <h3>{t('resume.education.brainstation.school')}</h3>
        <h4 className="education__timeframe">{t('resume.education.brainstation.date')}</h4>
        <ul className="education__achievements">
          <li className="education__item">
          {t('resume.education.brainstation.experience1')}
          </li>
          <li className="education__item">
          {t('resume.education.brainstation.experience2')}
          </li>
          <li className="education__item">
          {t('resume.education.brainstation.experience3')}
          </li>
          <li className="education__item">
          {t('resume.education.brainstation.experience4')}
          </li>
          <li className="education__item">
          {t('resume.education.brainstation.experience5')}
          </li>
        </ul>
        <ul className="experience__skills-list">
            <li className="experience__skills-item">{t('resume.education.brainstation.skill1')}</li>
            <li className="experience__skills-item">{t('resume.education.brainstation.skill2')}</li>
            <li className="experience__skills-item">{t('resume.education.brainstation.skill3')}</li>
            <li className="experience__skills-item">{t('resume.education.brainstation.skill4')}</li>
          </ul>
      </article>
      <article className="education__position">
        <h2 className="education__role">{t('resume.education.laval.title')}</h2>
        <h3>{t('resume.education.laval.school')}</h3>
        <h4 className="education__timeframe">{t('resume.education.laval.date')}</h4>
        <ul className="education__achievements">
          <li className="education__item">
          {t('resume.education.laval.experience1')}
          </li>
          <li className="education__item">
          {t('resume.education.laval.experience2')}
          </li>
          <li className="education__item">
          {t('resume.education.laval.experience3')}
          </li>
          <li className="education__item">
          {t('resume.education.laval.experience4')}
          </li>
        </ul>
        <ul className="experience__skills-list">
            <li className="experience__skills-item">{t('resume.education.laval.skill1')}</li>
            <li className="experience__skills-item">{t('resume.education.laval.skill2')}</li>
            <li className="experience__skills-item">{t('resume.education.laval.skill3')}</li>
            <li className="experience__skills-item">{t('resume.education.laval.skill4')}</li>
          </ul>
      </article>
    </section>
  )
}

export default Education
