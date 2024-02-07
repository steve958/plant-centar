import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Kontakt</h3>
                    <p>Email: info@example.com</p>
                    <p>Telefon: +1 (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                </div>
                <div className="footer-section">
                    <h3>Adresa</h3>
                    <p>Vojvode Janka Stojićevića 22, Šabac</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 SN. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
