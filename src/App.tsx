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
  const location = useLocation(); // Track current location

  const [loader, setLoader] = useState<boolean>(false);

  // Function to navigate with loader invoked before URL change
  const handleNavigation = (path: string) => {
    setLoader(true);  // Show loader before navigating
    setTimeout(() => {
      navigate(path);  // Navigate after the loader is shown
    }, 200);  // Slight delay to ensure smooth transition
  };

  // Trigger loader and scroll to top on route change by listening to location changes
  useEffect(() => {
    setLoader(true);  // Show loader as soon as location changes

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const timer = setTimeout(() => {
      setLoader(false);  // Hide loader after a short delay
    }, 500);

    return () => clearTimeout(timer);  // Cleanup timer on component unmount or location change
  }, [location.pathname]);  // Depend on the current path

  return (
    <div className="container-fluid">
      <Header />
      <Logo />
      <Menu onNavigate={handleNavigation} />  {/* Pass navigation handler to Menu */}
      {loader ? <Loader /> : <Outlet />}  {/* Show loader conditionally */}
      <Footer />
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
