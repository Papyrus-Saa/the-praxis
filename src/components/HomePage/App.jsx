/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
import Main from '../HomePage/Main/Main';
import Header from './Header/Header';
import { useState } from 'react';


const App = () => {


  // eslint-disable-next-line no-unused-vars
  const [openMap, setOpenMap] = useState(false);
  const [openEmergency, setOpenEmergency] = useState(false);
  const [isOpenCarousel, setIsOpenCarousel] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isOpenTeamMembers, setisOpenTeamMembers] = useState(false);
  const [isOpenOfficerHours, setisOpenOfficerHours] = useState(false);

  const closeMap = () => {
    setOpenMap(false);
  };
  const handleOpenMap = () => {
    setOpenMap(!openMap);
  };
  const closeEmergency = () => {
    setOpenEmergency(false);
  };
  const handleOpenEmergency = () => {
    setOpenEmergency(!openEmergency);
  };

  const handleClickCarouselOpen = () => {
    setIsOpenCarousel(true);
  };
  const handleClickCarouselClose = () => {
    setIsOpenCarousel(false);
  };

  const handleClickTeamMembersOpen = () => {
    setisOpenTeamMembers(true);
  };
  const handleClickTeamMembersClose = () => {
    setisOpenTeamMembers(false);
  };

  const handleClickOfficerOpen = () => {
    setisOpenOfficerHours(true);
  };
  const handleClickOficcerClose = () => {
    setisOpenOfficerHours(false);
  };

  return (
    <>
      <Header
        handleOpenMap={handleOpenMap}
        handleOpenEmergency={handleOpenEmergency}
      />
      <Main
        openMap={openMap}
        openEmergency={openEmergency}
        isOpenCarousel={isOpenCarousel}
        isOpenTeamMembers={isOpenTeamMembers}
        isOpenOfficerHours={isOpenOfficerHours}
        closeMap={closeMap}
        closeEmergency={closeEmergency}
        handleClickCarouselOpen={handleClickCarouselOpen}
        handleClickCarouselClose={handleClickCarouselClose}
        handleClickTeamMembersOpen={handleClickTeamMembersOpen}
        handleClickTeamMembersClose={handleClickTeamMembersClose}
        handleClickOfficerOpen={handleClickOfficerOpen}
        handleClickOficcerClose={handleClickOficcerClose}
      />
    </>
  );
};

export default App;
