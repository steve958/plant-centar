import { createHashRouter, Navigate } from "react-router-dom";
import App from "./App";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Company from "./components/Gallery/Company/Company";
import Gallery from "./components/Gallery/Gallery";
import Homepage from "./components/Homepage/Homepage";
import WebShop from "./components/WebShop/WebShop";
import AdminLogIn from "./components/WebShop/Admin/AdminLogIn/AdminLogIn";
import AdminPanel from "./components/WebShop/Admin/AdminPanel/AdminPanel";
import PrivateRoute from "./components/WebShop/Admin/PrivateRoute/PrivateRoute";
import Cart from "./components/WebShop/ShopComponents/Cart/Cart";
import Checkout from "./components/WebShop/ShopComponents/Checkout/Checkout";
import Fruits from "./components/Gallery/Fruits/Fruits";
import Vegetables from "./components/Gallery/Vegetables/Vegetables";
import Message from "./components/WebShop/ShopComponents/Message/Message";
import ItemDetails from "./components/WebShop/ShopComponents/ItemDetails/ItemDetails";
import CropProtection from "./components/Categories/CropProtection/CropProtection";
import CropNutrition from "./components/Categories/CropNutrition/CropNutrition";
import Seeds from "./components/Categories/Seeds/Seeds";
import DomesticAnimals from "./components/Categories/DomesticAnimals/DomesticAnimals";
import PetFood from "./components/Categories/PetFood/PetFood";
import Tools from "./components/Categories/Tools/Tools";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Define the index route as the default child route for "/"
        element: <Navigate to="/početna" />, // Redirect to "/početna"
      },
      {
        path: '/početna',
        element: <Homepage />,
      },
      {
        path: '/o-nama',
        element: <AboutUs />,
      },
      {
        path: '/galerija',
        element: <Gallery />,
      },
      {
        path: '/galerija/kompanija',
        element: <Company />,
      },
      {
        path: '/sredstva-za-zastitu-bilja',
        element: <CropProtection />,
      },
      {
        path: '/sredstva-za-ishranu-bilja',
        element: <CropNutrition />,
      },
      {
        path: '/hrana-za-domaće-životinje',
        element: <DomesticAnimals />,
      },
      {
        path: '/hrana-za-kućne-ljubimce',
        element: <PetFood />,
      },
      {
        path: '/semenska-roba',
        element: <Seeds />,
      },
      {
        path: '/alati-i-oprema',
        element: <Tools />,
      },
      {
        path: '/galerija/voće',
        element: <Fruits />,
      },
      {
        path: '/galerija/povrće',
        element: <Vegetables />,
      },
      {
        path: '/kontakt',
        element: <ContactUs />,
      },
      {
        path: '/prodavnica',
        element: <WebShop />,
      },
      {
        path: '/admin',
        element: <AdminLogIn />,
      },
      {
        path: '/korpa',
        element: <Cart />,
      },
      {
        path: '/naplata',
        element: <Checkout />
      },
      {
        path: '/poruka',
        element: <Message />
      },
      {
        path: '/item/:id',
        element: <ItemDetails />
      },
      {
        path: '/admin/panel',
        element: <PrivateRoute />, // Protect /admin/panel using PrivateRoute
        children: [
          {
            path: '',
            element: <AdminPanel />,
          },
        ],
      },
    ],
  },
]);
