/* eslint-disable @typescript-eslint/no-explicit-any */
import './MeetOurCompany.css';
import meetUsImg from '../../../assets/store.jpg';
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
              U srcu našeg poslovanja je posvećenost održivosti i etičkoj
              praksi.
            </p>
            <p>
              Blisko sarađujemo sa lokalnim poljoprivrednicima i dobavljačima,
              promovišući praksu poštene trgovine i osiguravajući da naši
              proizvodi ispunjavaju stroge standarde kvaliteta.
            </p>
            <p>
              Naš tim stručnjaka posvećen je pružanju personalizirane podrške
              poljoprivrednicima, nudeći im vredne savete, novosti sa tržišta i
              pristup najsavremenijim tehnologijama za povećanje produktivnosti.
            </p>
            <p>
              Osnovan sa strašću za podsticanje održive poljoprivrede i
              osiguravanje besprekornog lanca snabdevanja,
              <b> Plant Centar </b>
              je posvećen povezivanju poljoprivrednika sa globalnim tržištem, i
              time savlada jaz između proizvođača i potrošača.
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
