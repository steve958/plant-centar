import './AboutUs.css';
import store from '../../assets/store.jpg';
import logo from '../../assets/logo.jpg';

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-description-wrapper">
        <p>
          U srcu naseg poslovanja je posvećenost prirodi i održivosti poljoprivredne
          poizvodnje.
        </p>
        <p>
          Blisko sarađujemo sa poljoprivrednim proizvođačima i dobavljačima,
          promovišući praksu poštene trgovine i strucne podrške, trudeći se da naši
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
      <div className="about-us-img-wrapper">
        <img src={store} alt="" />
        <span>
          <img src={logo} alt="" className="about-us-logo" />
        </span>
      </div>
    </div>
  );
}
