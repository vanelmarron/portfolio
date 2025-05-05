import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import contactEn from "../src/locales/en/contact.json";
import homepageEn from '../src/locales/en/homepage.json';
import resumeEn from '../src/locales/en/resume.json';

import contactFr from '../src/locales/fr/contact.json';
import homepageFr from '../src/locales/fr/homepage.json';
import resumeFr from '../src/locales/fr/resume.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        contact: contactEn,
        homepage: homepageEn,
        resume: resumeEn,
      },
      fr: {
        contact: contactFr,
        homepage: homepageFr,
        resume: resumeFr,
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['homepage', 'contact', 'resume'],
    defaultNS: 'homepage',
    interpolation: {
      escapeValue: false,
    },
  });

  export default i18n;