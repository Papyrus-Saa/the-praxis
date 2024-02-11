import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './components/HomePage/App.jsx';
import LegalNotice from './components/PrivacyPolicy/LegalNotice.jsx';
import './index.css';
import { DataProtection } from './components/PrivacyPolicy/DataProtection.jsx';
import Map from './components/InfoComponent/Map.jsx'
import Emergency from './components/InfoComponent/Emergency.jsx';
import Leistungen from './components/HomePage/Main/Leistungen.jsx';
import ThePraxis from './components/HomePage/Main/ThePraxis.jsx';
import TeamMembersSection from './components/HomePage/Main/TeamMembersSection.jsx';
import OfficeHours from './components/HomePage/Main/OfficerHours.jsx';

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
    element: <DataProtection />,
  },

  {
    path: '/map',
    element: <Map/>
  },
  {
    path: '/emergency',
    element: <Emergency />,
  },
  {
    path: '/leistungen',
    element: <Leistungen />,
  },

  {
    path: '/praxis',
    element: <ThePraxis />,
  },
  {
    path: '/teamMembers',
    element: <TeamMembersSection/>,
  },
  {
    path: '/officeHours',
    element: <OfficeHours/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/legalNotice" element={<LegalNotice />} />
      <Route path="/dataProtection" element={<DataProtection />} />
      <Route path="/map" element={<Map />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/leistungen" element={<Leistungen />} />
      <Route path="/praxis" element={<ThePraxis />} />
      <Route path="/teamMembers" element={<TeamMembersSection />} />
      <Route path="/offecerHours" element={<OfficeHours/>} />
    </RouterProvider>
  </React.StrictMode>
);
