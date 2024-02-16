import './AboutUs.css';
import store from '../../assets/store.jpg';
import logo from '../../assets/logo.jpg';

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-description-wrapper">
        <p>
          <b>Plant centar doo Šabac</b> je preduzeće osnovano sa jasnim ciljem,
          cilj predstavlja uspeh i održivost poljprivredne proizvodnje. Nas tim
          čine iskusni agronomi koji Vam mogu preneti najnovija tehnoloska
          rešenja u samoj poljoprivrednoj proizvodnji a takodje i pomoći u
          prevazilaženju izazova koji su prisutni usled sve izraženijih
          klimatskih promena.
        </p>
        <p>
          Centrala preduzeća i glavni maloprodajni objekat nalaze se u Šapcu
          odakle teritorijarno pokrivamo Mačvanski i Sremski okrug. U ponudi
          imamo vodeće brendove iz oblasti zaštite i ishrane bilja, kao i
          ishrane domaćih životinja i kućnih ljubimaca. Pored navedenih
          sredstava imamo širok izbor alata i oruđa neophodnih u samoj
          poljoprivrednoj proizvodnji, a značajan segment predstavlja i oprema
          za bašte i dvorišta kao i ukrasno bilje.
        </p>
      </div>
      <div className="about-us-img-wrapper">
        <img src={store} alt="" />
        <span>
          <img src={logo} alt="" className="about-us-logo" />
        </span>
      </div>
    </div>
  );
}
