import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import MeetOurCompany from "./components/MeetOurCompany/MeetOurCompany";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import Menu from "./components/Menu/Menu";
import Partners from "./components/Partners/Partners";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Logo></Logo>
      <Menu></Menu>
      <Carousel></Carousel>
      <MeetOurCompany></MeetOurCompany>
      <WhatWeDo></WhatWeDo>
      <MeetOurTeam></MeetOurTeam>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
}

export default App;
