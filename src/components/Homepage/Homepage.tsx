import Carousel from './Carousel/Carousel';
// import MeetOurCompany from './MeetOurCompany/MeetOurCompany';
// import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import NeedHelp from './NeedHelp/NeedHelp';
import News from './News/News';
import Partners from './Partners/Partners';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import WhatWeDo from './WhatWeDo/WhatWeDo';

export default function Homepage() {
  return (
    <>
      <Carousel></Carousel>
      <div className='divider'></div>
      <News />
      <div className='divider'></div>
      <WhatWeDo></WhatWeDo>
      <div className='divider' style={{ marginBottom: '0' }}></div>
      {/* <MeetOurCompany></MeetOurCompany> */}
      {/* <div className='divider'></div> */}
      <NeedHelp />
      <div className='divider'></div>
      <SpecialOffer />
      <div className='divider'></div>
      <Partners></Partners>
    </>
  );
}
