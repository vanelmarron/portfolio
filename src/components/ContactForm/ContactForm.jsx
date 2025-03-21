import "./ContactForm.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
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
      <h1 className="contact-form__title">Let's Connect!</h1>
      <p className="contact-form__address">vanessa.lebrun.1@gmail.com</p>
      {isSent ? (
        <div className="contact-form__success">
          <h2>Message sent!</h2>
          <p>Your message has landed safely in my inbox. </p> 
          <p>I usually reply within 2 business days. Talk soon!</p>
        </div>
      ) : (
      <form
        action="submit"
        className="contact-form__form"
        ref={form}
        onSubmit={sendEmail}
      >
        <label htmlFor="name" className="contact-form__label">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="contact-form__input"
          required
        />
        <label htmlFor="email" className="contact-form__label">
          Your Email
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
          Your Phone Number
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
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="contact-form__textarea"
          required
        ></textarea>
        <button type="submit" className="contact-form__button" value="Send">
          SEND
        </button>
      </form>
      )}
    </section>
  );
}

export default ContactForm;
