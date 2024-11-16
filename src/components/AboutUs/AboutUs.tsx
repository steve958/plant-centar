import { useState } from 'react';
import './AboutUs.css';
import { Avatar, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Importing avatars (replace these with actual image imports or URLs)
import ceoAvatar from '../../assets/avatar.png';
import sales1Avatar from '../../assets/avatar.png';
import sales2Avatar from '../../assets/avatar.png';
// Placeholder for the CEO modal image (replace with the actual image when available)
import ceoModalImage from '../../assets/vizitka.jpg';

export default function AboutUs() {
  // State to control the modal open/close
  const [open, setOpen] = useState(false);

  // Function to handle opening the modal
  const handleOpen = () => setOpen(true);

  // Function to handle closing the modal
  const handleClose = () => setOpen(false);

  return (
    <div className="about-us-container">
      <div className="about-us-description-wrapper">
        <p>
          U srcu našeg poslovanja je posvećenost prirodi i održivosti poljoprivredne
          proizvodnje.
        </p>
        <p>
          Blisko sarađujemo sa poljoprivrednim proizvođačima i dobavljačima,
          promovišući praksu poštene trgovine i stručne podrške, trudeći se da naši
          proizvodi i usluge ispunjavaju najstrožije standarde kvaliteta.
        </p>
        <p>
          Naš tim izdvaja pružanje personalizovane podrške poljoprivrednicima, nudeći im
          vredne savete, novosti sa tržišta i pristup najsavremenijim tehnologijama za
          povećanje produktivnosti u samoj poljoprivrednoj proizvodnji.
        </p>
        <p>
          Osnovan sa strašću za podsticanje održive poljoprivrede i osiguravanje
          snabdevanja kvalitetnim repromaterijalima, <b>Plant Centar</b> je posvećen podršci
          poljoprivrednim proizvođačima u proizvodnji kvalitetne i zdravstveno ispravne
          hrane, strogo vodeći računa o zaštiti životne sredine i umanjenju dejstva
          klimatskih promena.
        </p>
      </div>
      <div className="about-us-hierarchy-wrapper">
        <div className="hierarchy-container">
          {/* CEO */}
          <div className="hierarchy-level ceo">
            <Avatar
              src={ceoAvatar}
              alt="CEO Avatar"
              className="avatar"
              onClick={handleOpen}
              style={{ cursor: 'pointer' }}
            />
            <div className="employee-info">
              <h3>Đorđe Arsenović</h3>
              <p>dipl. inž. zaštite bilja</p>
              <p>Direktor</p>
            </div>
            {/* Connecting line */}
            <div className="connector">
              <div className="connector-horizontal"></div>
            </div>
          </div>
          {/* Sales Representatives */}
          <div className="hierarchy-level sales">
            <div className="sales-rep">
              <Avatar src={sales1Avatar} alt="Sales Rep 1" className="avatar" />
              <div className="employee-info">
                <h3>Stevan Vuković</h3>
                <p>veterinarski tehničar</p>
                <p>Stručnjak za ishranu životinja</p>
              </div>
            </div>
            <div className="sales-rep">
              <Avatar src={sales2Avatar} alt="Sales Rep 2" className="avatar" />
              <div className="employee-info">
                <h3>Slađana Čačić</h3>
                <p>dipl. inž. zaštite bilja</p>
                <p>Agronom - stručni konsultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for CEO Image */}
      <Modal open={open} onClose={handleClose} className="modal">
        <Box className="modal-content">
          <IconButton
            onClick={handleClose}
            className="modal-close-button"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <img src={ceoModalImage} alt="CEO" className="modal-image" />
        </Box>
      </Modal>
    </div>
  );
}
