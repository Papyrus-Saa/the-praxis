import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './components/HomePage/App.jsx';
import LegalNotice from './components/PrivacyPolicy/LegalNotice.jsx'
import './index.css';
import { DataProtection } from './components/PrivacyPolicy/DataProtection.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/legalNotice',
    element: <LegalNotice />,
  },
  {
    path: '/dataProtection',
    element: <DataProtection/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/legalNotice" element={<LegalNotice />} />
      <Route path="/dataProtection" element={<DataProtection />} />
    </RouterProvider>
  </React.StrictMode>
);

