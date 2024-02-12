/* eslint-disable no-unused-vars */
import Navbar from './Navbar';
import { useState } from 'react';
import styled from 'styled-components';
import TeamMembersSection from './TeamMembersSection';
import SimpleCarousel from './SimpleCarousel';
import DoctorEducation from './DoctorEducation';
import Contact from '../../shared/Contact';
import Form from './Form';
import Footer from '../../shared/Footer';
import OfficeHours from './OfficerHours';

import PicDoctor from '../../../assets/img/pexels-ivan-samkov-4989168.jpg';
import ThePraxis from './ThePraxis';

/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const MainContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 1500px) {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-auto-flow: row dense; */
  }
`;
const Container = styled.div`
  background-color: var(--bg-color);
  margin: 0;
`;
const AcademicCredentials = styled.div`
  text-align: center;
  list-style-type: none;
  padding: 0;
  gap: 10px;
  margin: 10px;
  text-align: center;
  padding: 1em 0.3em 0;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const SpanTitle = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;
const SpanTitleColor = styled.span`
  display: block;
  color: var(--primary-color);
  font-size: 1rem;

  @media screen and (min-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 1024px) {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: 1400px) {
    width: 40%;
  }
`;

const Image = styled.img`
  margin-right: auto;
  margin-left: auto;
  display: block;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    border-radius: var(--border-radius);
  }
`;

// eslint-disable-next-line react/prop-types
const Main = ({
  handleClickCarouselOpen,
  handleClickTeamMembersOpen,
  isOpenOfficerHours,
  handleClickOfficerOpen,
  handleClickOficcerClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <MainContainer>
        <Container>
          {/* {openMap && <Map closeMap={closeMap} />}
          {openEmergency && <Emergency closeEmergency={closeEmergency} />} */}
          <SimpleCarousel />
          {isOpenOfficerHours && (
            <OfficeHours handleClickOficcerClose={handleClickOficcerClose} />
          )}
          <Navbar
            handleClick={handleClick}
            handleClickCarouselOpen={handleClickCarouselOpen}
            handleClickTeamMembersOpen={handleClickTeamMembersOpen}
            handleClickOfficerOpen={handleClickOfficerOpen}
          />
          {/* <ThePraxis
            isOpenCarousel={isOpenCarousel}
            handleClickCarouselClose={handleClickCarouselClose}
          /> */}
        </Container>

        {/* {isOpenTeamMembers && (
          <TeamMembersSection
            handleClickTeamMembersClose={handleClickTeamMembersClose}
          />
        )} */}
        <AcademicCredentials>
          <SpanTitle>
            Nach 15 Jahren Klinikerfahrung jetzt in niedergelassener Praxis
            <SpanTitleColor>
              <br /> Wir freuen uns, Sie zu behandeln!
            </SpanTitleColor>
          </SpanTitle>
          <ImageContainer>
            <Image src={PicDoctor} alt="doctor pic" />
          </ImageContainer>
        </AcademicCredentials>
        <DoctorEducation />
      </MainContainer>
      <Form />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
