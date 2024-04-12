import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

import {
  RouterProvider,
} from "react-router-dom";

import './index.css'
import router from './Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
