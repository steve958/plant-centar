import { useState } from 'react';
import './AboutUs.css';
import {
  Modal,
  Box,
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Replace with your actual image imports/URLs:
import ceoAvatar from '../../assets/avatar.png';
import sales1Avatar from '../../assets/avatar.png';
import sales2Avatar from '../../assets/avatar.png';
import ceoModalImage from '../../assets/vizitka.jpg';

export default function AboutUs() {
  // State to control the modal open/close
  const [open, setOpen] = useState(false);

  // Functions to handle modal visibility
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="about-us-container">
      {/* Company Description */}
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
          snabdevanja kvalitetnim repromaterijalima, <b>Plant Centar</b> je posvećen
          podršci poljoprivrednim proizvođačima u proizvodnji kvalitetne i zdravstveno
          ispravne hrane, strogo vodeći računa o zaštiti životne sredine i umanjenju
          dejstva klimatskih promena.
        </p>
      </div>

      {/* Hierarchy (CEO and Sales Reps) */}
      <div className="about-us-hierarchy-wrapper">
        <div className="hierarchy-container">
          {/* CEO Card */}
          <Card className="rep-card">
            {/* Clicking the card opens the modal */}
            <CardActionArea onClick={handleOpen}>
              <CardMedia
                component="img"
                image={ceoAvatar}
                alt="CEO Avatar"
                sx={{
                  /* 
                   * width/height ratio ensures height is double the width.
                   * Adjust as needed for your design and breakpoints.
                   */
                  width: { xs: 80, md: 120 },
                  height: { xs: 160, md: 240 },
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Đorđe Arsenović
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  dipl. inž. zaštite bilja
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Prodaja i stručna služba
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Sales Representative 1 */}
          <Card className="rep-card">
            <CardActionArea>
              <CardMedia
                component="img"
                image={sales1Avatar}
                alt="Sales Rep 1"
                sx={{
                  width: { xs: 80, md: 120 },
                  height: { xs: 160, md: 240 },
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Jelena Marinković
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  dipl. inž. zaštite bilja
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Agronom - stručni konsultant
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Sales Representative 2 */}
          <Card className="rep-card">
            <CardActionArea>
              <CardMedia
                component="img"
                image={sales2Avatar}
                alt="Sales Rep 2"
                sx={{
                  width: { xs: 80, md: 120 },
                  height: { xs: 160, md: 240 },
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Slađana Čačić
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  dipl. inž. zaštite bilja
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Agronom - stručni konsultant
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>

      {/* Modal for CEO Larger Image */}
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
