/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Logo from '../../shared/Logo';
import Img from './Img';
import Information from '../../InfoComponent/Information';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.6em;
  background-color: var(--primary-colorTwo);

  @media screen and (min-width: 1024px) {
  }
`;

const Title = styled.h1`
  color: var(--text-color);
  margin: 10px 0 10px 0;

  @media screen and (min-width: 600px) {
    font-size: 2.5em;
    /* margin-bottom: 40px; */
  }

  @media screen and (min-width: 768px) {
    font-size: 2em;
    /* margin-bottom: 60px; */
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
    text-align: center;
  }
`;

const SubTitle = styled.h3`
  color: var(--secundary-color);
  text-align: center;
  /* margin-bottom: 30px; */

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.7em;
    /* margin-bottom: 40px; */
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const Header = ({ handleOpenMap, handleOpenEmergency }) => {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <Title>Willkommen</Title>
        <div>
          <SubTitle>Praxis Dr. med. Univ. Dario Sanchez</SubTitle>
        </div>
        <Img />
        <Information
          handleOpenMap={handleOpenMap}
          handleOpenEmergency={handleOpenEmergency}
        />
      </HeaderContainer>
    </>
  );
};

export default Header;
