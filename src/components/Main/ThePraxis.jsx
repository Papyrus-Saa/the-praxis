/* eslint-disable react/prop-types */
import styled, { keyframes } from 'styled-components';
import CloseContent from '../shared/CloseContent';
import Contact from '../shared/Contact';

const images = [
  '../../assets/img/img0.jpg',
  '../../assets/img/img7.jpg',
  '../../assets/img/img2.jpg',
  '../../assets/img/img3.jpg',
  '../../assets/img/img4.jpg',
  '../../assets/img/img5.jpg',
  '../../assets/img/img6.jpg',
];

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

const CarouselContainer = styled.div`
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

const ThePraxis = ({ isOpenCarousel, handleClickCarouselClose }) => {
  return (
    <>
      {isOpenCarousel && (
        <CarouselContainer>
          <div onClick={handleClickCarouselClose}>
            <CloseContent />
          </div>
          <List>
            {images.map((item, index) => (
              <ListItem key={index}>
                <Title>{imageTexts[index]}</Title>
                <Image src={item} alt={`Slide ${index + 1}`} />
              </ListItem>
            ))}
          </List>
          <Contact />
        </CarouselContainer>
      )}
    </>
  );
};

export default ThePraxis;
