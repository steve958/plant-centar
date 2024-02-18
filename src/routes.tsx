import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Company from './components/Gallery/Company/Company';
import Gallery from './components/Gallery/Gallery';
import Homepage from './components/Homepage/Homepage';

export const router = createBrowserRouter([
  {
    path: '/',
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
        path: '/kontakt',
        element: <ContactUs />,
      },
    ],
  },
]);
