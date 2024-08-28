/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './ContactUs.css'; // Import your CSS file
import emailjs from "@emailjs/browser"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    emailjs
        .sendForm(
            "service_7o97wws",
            "template_nypmfo7",
            formData.name,
            "5fNu_yD0ALmsTRjiS"
        )
        .then(
            (result) => {
                console.log(result.text);
                alert('Poruka poslata')
            },
            (error) => {
                console.error(error.text);
            }
        );
        
        setFormData({ name: '',
          email: '',
          message: '',})
};

  return (
    <div className="contact-us-form">
      <h2>Kontaktirajte nas</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ime:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Poruka:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className='submit-button' onClick={(e) => handleSubmit(e)}>Pošalji</button>
      </form>
    </div>
  );
};

export default ContactUs;
