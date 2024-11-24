/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import './ContactUs.css'; // Import your CSS file
import emailjs from "@emailjs/browser"

const ContactUs = () => {


  const form = useRef<any>(null);



  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_i3ecqfb",
        "template_ypgdrgq",
        form.current,
        'YzjcisuTMf4N1ViWq'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Poruka poslata')
        },
        (error) => {
          console.error(error);
        }
      );

  };

  return (
    <div className="contact-us-form">
      <h2>Kontaktirajte nas</h2>
      <p className='contact-us-description'>
        Naš tim čine diplomirani agronomi sa dugogodišnjim iskustvom iz
        oblasti poljoprivredne proizvodnje. Na raspolaganju smo vam za sva
        pitanja i nedoumice, kako sa stručne, tako i sa komercijalne strane.
      </p>
      <form onSubmit={handleSubmit} ref={form}>
        <div className="form-group">
          <label htmlFor="name">Ime:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Poruka:</label>
          <textarea
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <button className='submit-button' type='submit'>POŠALJI</button>
      </form>
    </div>
  );
};

export default ContactUs;
