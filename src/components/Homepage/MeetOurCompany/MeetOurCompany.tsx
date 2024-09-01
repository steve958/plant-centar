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
        <div className="meet-us-content">
          <div className="meet-us-description">
            <p>
              <b>Plant Centar</b> doo Šabac je preduzeće osnovano sa strašću za podsticanje
              održive poljoprivredne proizvodnje i osiguranje snabdevanja kvalitetnim
              repromaterijalima, sa ciljem dobijanja kvalitetne i zdravstveno ispravne
              hrane, uz obavezno posvećivanje pažnje zaštiti životne sredine.
            </p>
            <p>
              Naš tim čine iskusni, diplomirani agronomi, koji se bave kreiranjem
              personalizovane podrške poljoprivrednim proizvođačima, kao i izradom
              kvalitetnih programa zaštite i ishrane bilja, uz obavezno terensko prisustvo.
            </p>
            <p>
              Ono što nas dodatno izdvaja je i dobro poznavanje hidroponskog uzgoja
              kako voćarskih, tako i povrtarskih kultura, što predstvlja iskorak u
              budućnost gajenje bilja.
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
