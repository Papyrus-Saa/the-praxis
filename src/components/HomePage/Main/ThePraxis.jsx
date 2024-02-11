/* eslint-disable react/prop-types */
import styled, { keyframes } from 'styled-components';
import Contact from '../../shared/Contact';

import image1 from '../../../assets/img/img0.jpg';
import image2 from '../../../assets/img/img7.jpg';
import image3 from '../../../assets/img/img2.jpg';
import image4 from '../../../assets/img/img3.jpg';
import image5 from '../../../assets/img/img4.jpg';
import image6 from '../../../assets/img/img5.jpg';
import image7 from '../../../assets/img/img6.jpg';


import HomeComponent from '../../shared/HomeComponent';

const images = [image1, image2, image3, image4, image5, image6, image7];

const imageTexts = [
  'Anmeldung',
  'Hämatologie-Analysator',
  'Wartezimmer',
  'Zahnarzt-Liege',
  'Binoküler Mikroskop',
  'Behandlungsraum',
  'Behandlungszimmer',
];

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  padding-top: 2em;
  animation: ${fadeInAnimation} 1s both;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);

  @media screen and (min-width: 1400px) {
    width: 60%;
    margin-right: auto;
    margin-left: auto;
  }
`;
const List = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li`
  margin: 20px;
  box-shadow: 0px 0px 5px 0px rgba(161, 161, 161, 1);
  border-radius: var(--border-radius);

  @media screen and (min-width: 1400px) {
    padding-bottom: 0.6em;
  }
`;

const Title = styled.h4`
  margin: 10px;
  padding: 0.5em;
  border-radius: var(--border-radius);

  @media screen and (min-width: 600px) {
    font-size: 1.2rem;
  }
`;

const ThePraxis = () => {
  return (
    <>
      <Container>
        <HomeComponent/>
        <List>
          {images.map((item, index) => (
            <ListItem key={index}>
              <Title>{imageTexts[index]}</Title>
              <Image src={item} alt={`Slide ${index + 1}`} />
            </ListItem>
          ))}
        </List>
        <Contact />
      </Container>
    </>
  );
};

export default ThePraxis;
