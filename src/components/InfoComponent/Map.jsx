/* eslint-disable no-undef */
import styled, { keyframes } from 'styled-components';


const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  padding: 0.6em;
  height: 100vh;
`;
const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-shadow: -1px 0px 11px 0px rgba(146, 146, 146, 0.75);
  animation: ${fadeInAnimation} 1s both;

  @media screen and (min-width: 600px) {
    /* height: 500px; */
  }
`;

// eslint-disable-next-line react/prop-types
const Map = ({ closeMap }) => {
  return (
    <>
      <Container>
        <ContainerContent>
          <div onClick={closeMap}> </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.    655040892101!2d7.073368877466109!3d52.43104784281034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b821c0e9b2139b%3A0x73ee38ed75ded0bc!2sS%C3%BCdgracht%2057%2C%2048529%20Nordhorn!5e0!3m2!1sen!2sde!4v1705265367474!5m2!1sen!2sde"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"></iframe>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Map;
