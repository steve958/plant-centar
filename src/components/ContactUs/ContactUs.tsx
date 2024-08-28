/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import './ContactUs.css'; // Import your CSS file
import emailjs from "@emailjs/browser"

const ContactUs = () => {
 

  const form = useRef<any>(null);

 

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
        .sendForm(
            "service_7o97wws",
            "template_nypmfo7",
            form.current,
            "5fNu_yD0ALmsTRjiS"
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
        <button className='submit-button' type='submit'>Pošalji</button>
      </form>
    </div>
  );
};

export default ContactUs;
