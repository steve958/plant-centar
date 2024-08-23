import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/početna");
  }, []);

  return (
    <div className="container-fluid">
      <Header></Header>
      <Logo></Logo>
      <Menu></Menu>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
