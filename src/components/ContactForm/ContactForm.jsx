import "./ContactForm.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function ContactForm() {

  const { t } = useTranslation('contact');

  const form = useRef();
  const [ isSent, setIsSent ] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formData = new FormData(form.current);
    const email = formData.get("email");
    const phone = formData.get("phone");

    let newErrors = {};

    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Please enter a valid phone number (555-555-5555).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm("service_pbqvdtj", "template_nyit9cm", form.current, {
        publicKey: "dFKnobxgLVzFmVrCi",
      })
      .then(
        () => {
          console.log("Message Sent!");
          setIsSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact-form">
      <h1 className="contact-form__title">{t('contact.title')}</h1>
      <p className="contact-form__address">vanessa.lebrun.1@gmail.com</p>
      {isSent ? (
        <div className="contact-form__success">
          <h2>{t('contact.confirmation')}</h2>
          <p>{t('contact.text1')}</p> 
          <p>{t('contact.text2')}</p>
        </div>
      ) : (
      <form
        action="submit"
        className="contact-form__form"
        ref={form}
        onSubmit={sendEmail}
      >
        <label htmlFor="name" className="contact-form__label">
        {t('contact.name')}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="contact-form__input"
          required
        />
        <label htmlFor="email" className="contact-form__label">
        {t('contact.your-email')}
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="contact-form__input"
          required
        />
        {errors.email && <p className="contact-form__error">{errors.email}</p>}
        <label htmlFor="phone" className="contact-form__label">
        {t('contact.phone')}
        </label>
        <input
          type="phone"
          name="phone"
          id="phone"
          className="contact-form__input"
          required
        />
        {errors.phone && <p className="contact-form__error">{errors.phone}</p>}
        <label htmlFor="message" className="contact-form__label">
        {t('contact.message')}
        </label>
        <textarea
          name="message"
          id="message"
          className="contact-form__textarea"
          required
        ></textarea>
        <button type="submit" className="contact-form__button" value="Send">
        {t('contact.button')}
        </button>
      </form>
      )}
    </section>
  );
}

export default ContactForm;
