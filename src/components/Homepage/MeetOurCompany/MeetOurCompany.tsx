/* eslint-disable @typescript-eslint/no-explicit-any */
import './MeetOurCompany.css';
import meetUsImg from '../../../assets/logo.jpg';
import { useRef } from 'react';

export default function MeetOurCompany(props: any) {
  const ref = useRef(props.ref);

  return (
    <div className="meet-us-container" ref={ref}>
      <div className="meet-us-wrapper">
        <div className="meet-us-heading">
          <h2>Upoznajte našu kompaniju</h2>
        </div>
        <div className="heading-border"></div>
        <div className="meet-us-content">
          <div className="meet-us-description">
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
          <div className="meet-us-img">
            <img src={meetUsImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
