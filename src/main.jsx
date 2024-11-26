import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Properties from './pages/Properties/Properties.jsx';
import Properties_details from './pages/Properties-details/Properties_details.jsx';
import Contact_us from './pages/Contact_us/Contact_us.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Properties",
    element: <Properties/>,
  },
  {
    path: "/Propertiesdetails",
    element: <Properties_details/>,
  },
  {
    path: "/Contactus",
    element: <Contact_us/>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
