import Carousel from './Carousel/Carousel';
import MeetOurCompany from './MeetOurCompany/MeetOurCompany';
import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import Partners from './Partners/Partners';
import WhatWeDo from './WhatWeDo/WhatWeDo';

export default function Homepage() {
  return (
    <>
      <Carousel></Carousel>
      <MeetOurCompany></MeetOurCompany>
      <WhatWeDo></WhatWeDo>
      <MeetOurTeam></MeetOurTeam>
      <Partners></Partners>
    </>
  );
}
