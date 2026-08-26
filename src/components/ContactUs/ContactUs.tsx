import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import "./ContactUs.css";

const defaultIcon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const attribution = document.querySelector(".leaflet-control-attribution") as HTMLElement | null;
    if (attribution) attribution.style.display = "none";
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formRef.current || isSending) return;

    setIsSending(true);
    setStatusMessage(null);
    emailjs
      .sendForm(
        "service_i3ecqfb",
        "template_ypgdrgq",
        formRef.current,
        "YzjcisuTMf4N1ViWq",
      )
      .then(
        () => {
          setStatusMessage("Vaša poruka je uspešno poslata.");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatusMessage("Došlo je do greške. Pokušajte ponovo.");
        },
      )
      .finally(() => setIsSending(false));
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-shell contact-hero__grid">
          <div>
            <span className="contact-kicker">Razgovarajmo</span>
            <h1>Tu smo za pitanja sa terena.</h1>
          </div>
          <p>
            Naš tim agronoma pomoći će vam da odaberete odgovarajuće proizvode i
            donesete sigurnije odluke u proizvodnji.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-shell contact-content__grid">
          <div className="contact-form-panel">
            <span className="contact-kicker">Pošaljite upit</span>
            <h2>Kako možemo da vam pomognemo?</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <label>
                <span>Ime i prezime</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Email adresa</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                <span>Vaša poruka</span>
                <textarea name="message" rows={6} required />
              </label>
              <button type="submit" disabled={isSending}>
                {isSending ? "Slanje..." : "Pošaljite poruku"}
                <ArrowForwardRoundedIcon aria-hidden="true" />
              </button>
              {statusMessage && (
                <p className="contact-form__status" role="status">{statusMessage}</p>
              )}
            </form>
          </div>

          <aside className="contact-details">
            <div>
              <span className="contact-kicker">Direktan kontakt</span>
              <h2>Svratite ili nas pozovite</h2>
              <p>Radujemo se razgovoru o vašoj proizvodnji i konkretnim potrebama.</p>
            </div>
            <div className="contact-details__links">
              <a href="tel:+381604055510">
                <PhoneOutlinedIcon aria-hidden="true" />
                <span><small>Telefon</small>+381 60 405 5510</span>
              </a>
              <a href="mailto:plant.centar@gmail.com">
                <EmailOutlinedIcon aria-hidden="true" />
                <span><small>Email</small>plant.centar@gmail.com</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=44.7464481,19.7058977"
                target="_blank"
                rel="noreferrer"
              >
                <LocationOnOutlinedIcon aria-hidden="true" />
                <span><small>Adresa</small>Vojvode Janka Stojićevića 22, Šabac</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-map-section" aria-labelledby="contact-map-title">
        <div className="contact-shell">
          <div className="contact-map__heading">
            <div>
              <span className="contact-kicker">Naša lokacija</span>
              <h2 id="contact-map-title">Posetite Plant Centar u Šapcu</h2>
            </div>
            <p>Vojvode Janka Stojićevića 22</p>
          </div>
          <div className="contact-map">
            <MapContainer
              center={[44.7464481, 19.7058977]}
              zoom={16}
              scrollWheelZoom={false}
              className="contact-map__container"
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[44.7464481, 19.7058977]}>
                <Popup>
                  <strong>Plant Centar</strong>
                  <br />
                  Vojvode Janka Stojićevića 22, Šabac
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
