import Carousel from './Carousel/Carousel';
import MeetOurCompany from './MeetOurCompany/MeetOurCompany';
import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import Partners from './Partners/Partners';
import WhatWeDo from './WhatWeDo/WhatWeDo';

export default function Homepage() {
  return (
    <>
      <Carousel></Carousel>
      <div className='divider'></div>
      <MeetOurCompany></MeetOurCompany>
      <div className='divider'></div>
      <WhatWeDo></WhatWeDo>
      <div className='divider'></div>
      <MeetOurTeam></MeetOurTeam>
      <div className='divider'></div>
      <Partners></Partners>
    </>
  );
}
