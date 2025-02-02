import React, { useEffect, useRef, useState } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

// React Leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Leaflet default icon fix
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Configure default marker
const defaultIcon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const ContactFormWithMap: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {

    const attribution = document.querySelector(
      ".leaflet-control-attribution"
    ) as HTMLElement;
    attribution.style.display = "none";
  }, []);

  // Preserve the same logic for sending via EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_i3ecqfb',
        'template_ypgdrgq',
        formRef.current,
        'YzjcisuTMf4N1ViWq' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatusMessage('Vaša poruka je uspešno poslata!');
          formRef?.current?.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatusMessage('Došlo je do greške. Pokušajte ponovo.');
        }
      );
  };

  return (
    <div className="contact-with-map__wrapper">
      {/* Form Section */}
      <div className="contact-with-map__form-section">
        <h2 className="contact-with-map__heading">Kontaktirajte nas</h2>
        <p className="contact-with-map__subtext">
          Naš tim čine iskusni agronomi, spremni da odgovore na sve izazove.
          Za sva pitanja i nedoumice, slobodno nam se obratite. Odgovorićemo vam
          u najkraćem mogućem roku.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-with-map__form"
        >
          <div className="contact-with-map__field">
            <input type="text" id="name" name="name" placeholder=" " required />
            <label htmlFor="name">Ime</label>
          </div>

          <div className="contact-with-map__field">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="contact-with-map__field">
            <textarea
              id="message"
              name="message"
              placeholder=" "
              required
            />
            <label htmlFor="message">Poruka</label>
          </div>

          <button type="submit" className="contact-with-map__submit-btn">
            Pošalji
          </button>

          {statusMessage && (
            <p className="contact-with-map__status">{statusMessage}</p>
          )}
        </form>
      </div>

      {/* Map Section */}
      <div className="contact-with-map__map-section">
        <h3 className="contact-with-map__map-heading">Naša lokacija</h3>
        <MapContainer
          center={[44.7464481, 19.7058977]}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
          className="contact-with-map__map-container"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[44.7464481, 19.7058977]}>
            <Popup>
              <strong>Ime prodavnice</strong>
              <br />
              Adresa prodavnice
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactFormWithMap;
