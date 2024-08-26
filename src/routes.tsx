import { createHashRouter } from "react-router-dom";
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

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        path: '/admin/panel',
        element: <PrivateRoute />, // Zaštiti /admin/panel koristeći PrivateRoute
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
