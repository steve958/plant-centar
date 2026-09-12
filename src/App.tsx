import "./App.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import { useLayoutEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import homepageBanner from "./assets/1788104161408-transparent.png";

const minimumLoaderDuration = 500;
const maximumImageWait = 5000;

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    let isSettled = false;

    const finish = () => {
      if (isSettled) return;
      isSettled = true;
      window.clearTimeout(timeout);
      resolve();
    };

    const decode = () => {
      if (typeof image.decode === "function") {
        image.decode().catch(() => undefined).finally(finish);
        return;
      }
      finish();
    };

    const timeout = window.setTimeout(finish, maximumImageWait);
    image.onload = decode;
    image.onerror = finish;
    image.src = src;

    if (image.complete) decode();
  });
}

function App() {
  const navigate = useNavigate();
  const location = useLocation(); // Track current location

  const [loader, setLoader] = useState<boolean>(true);

  // Function to navigate with loader invoked before URL change
  const handleNavigation = (path: string) => {
    setLoader(true);  // Show loader before navigating
    setTimeout(() => {
      navigate(path);  // Navigate after the loader is shown
    }, 200);  // Slight delay to ensure smooth transition
  };

  // Start before paint and wait for the homepage hero to decode before revealing it.
  useLayoutEffect(() => {
    let isCancelled = false;
    setLoader(true);

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const minimumDelay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, minimumLoaderDuration);
    });
    const routeAssetsReady = location.pathname === "/pocetna"
      ? preloadImage(homepageBanner)
      : Promise.resolve();

    Promise.all([minimumDelay, routeAssetsReady]).then(() => {
      if (!isCancelled) setLoader(false);
    });

    return () => {
      isCancelled = true;
    };
  }, [location.pathname]);

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
