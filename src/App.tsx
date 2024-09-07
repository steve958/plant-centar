import "./App.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const navigate = useNavigate();
  const location = useLocation();  // Use useLocation to track the current path

  const [loader, setLoader] = useState<boolean>(false);

  // Navigate to the initial route
  useEffect(() => {
    navigate("/početna");
  }, [navigate]);

  // Handle loader visibility based on location changes
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => {
      setLoader(false);
    }, 700);

    return () => clearTimeout(timer);  // Cleanup the timer on unmount or location change
  }, [location.pathname]);  // Depend on the pathname to trigger loader

  return (
    <div className="container-fluid">
      <Header />
      <Logo />
      <Menu />
      {loader ? <Loader /> : <Outlet />}
      <Footer />
      <ToastContainer limit={1} />
    </div>
  );
}


export default App;
