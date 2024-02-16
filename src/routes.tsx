import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutUs from './components/AboutUs/AboutUs';
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
    ],
  },
]);
