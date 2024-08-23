import { createHashRouter } from "react-router-dom";
import App from "./App";
import Sorry from "./components/SorryPage/Sorry";
// import AboutUs from "./components/AboutUs/AboutUs";
// import ContactUs from "./components/ContactUs/ContactUs";
// import Company from "./components/Gallery/Company/Company";
// import Gallery from "./components/Gallery/Gallery";
// import Homepage from "./components/Homepage/Homepage";
// import WebShop from "./components/WebShop/WebShop";
// import AdminLogIn from "./components/WebShop/Admin/AdminLogIn/AdminLogIn";
// import AdminPanel from "./components/WebShop/Admin/AdminPanel/AdminPanel";
// import PrivateRoute from "./components/WebShop/Admin/PrivateRoute/PrivateRoute";
// import Cart from "./components/WebShop/ShopComponents/Cart/Cart";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/početna",
        element: <Sorry />,
      },
      //  {
      //  path: '/početna',
      //element: <Homepage />,
      //},
      //   {
      //     path: '/o-nama',
      //     element: <AboutUs />,
      //   },
      //   {
      //     path: '/galerija',
      //     element: <Gallery />,
      //   },
      //   {
      //     path: '/galerija/kompanija',
      //     element: <Company />,
      //   },
      //   {
      //     path: '/kontakt',
      //     element: <ContactUs />,
      //   },
      //   {
      //     path: '/prodavnica',
      //     element: <WebShop />,
      //   },
      //   {
      //     path: '/admin',
      //     element: <AdminLogIn />,
      //   },
      //   {
      //     path: '/cart',
      //     element: <Cart />,
      //   },
      //   {
      //     path: '/admin/panel',
      //     element: <PrivateRoute />, // Zaštiti /admin/panel koristeći PrivateRoute
      //     children: [
      //       {
      //         path: '',
      //         element: <AdminPanel />,
      //       },
      //     ],
      //   },
    ],
  },
]);
