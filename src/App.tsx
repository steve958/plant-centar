import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";


function App() {
  const navigate = useNavigate();

  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
    navigate("/početna");
  }, []);

  useEffect(() => {
    console.log(window.location);
    setLoader(true)
    setTimeout(() => setLoader(false), 1500)
  }, [window.location.href])

  return (
    <div className="container-fluid">
      <Header></Header>
      <Logo></Logo>
      <Menu></Menu>
      {loader ? <Loader /> : <Outlet />}
      <Footer></Footer>
    </div>
  );
}

export default App;
