import './MeetOurTeam.css';

export default function MeetOurTeam() {
  return (
    <div className="meet-our-team-container">
      <div className="meet-our-team-wrapper">
        <div className="meet-our-team-heading">
          <h2>Upoznajte naš tim</h2>
        </div>
        <div className="heading-border"></div>
        <div className="meet-our-team-content">
          <div className="meet-our-team-card">
            <img src="" alt="slika" />
            <h3>Đorđe Arsenović</h3>
            <h4>dipl. inž. zaštite bilja</h4>
            <h4>Direktor</h4>
          </div>
          <div className="meet-our-team-card">
            <img src="" alt="slika" />
            <h3>Slađana Čačić</h3>
            <h4>dipl. inž. zaštite bilja</h4>
            <h4>Agronom-stručni konulstant</h4>
          </div>
          <div className="meet-our-team-card">
            <img src="" alt="slika" />
            <h3>Stevan Vuković</h3>
            <h4>veterinarski tehničar</h4>
            <h4>Stručnjak za ishranu životinja</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
