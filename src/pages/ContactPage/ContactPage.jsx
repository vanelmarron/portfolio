import "./ContactPage.scss"
import ContactForm from '../../components/ContactForm/ContactForm'

import {useEffect} from "react";

function ContactPage() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <main className="contact">
      <ContactForm/>
    </main>
  )
}

export default ContactPage
