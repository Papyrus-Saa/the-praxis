/* eslint-disable react/prop-types */
import styled, { keyframes } from 'styled-components';
import CloseContent from '../shared/CloseContent';

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
  text-align: center;
  padding-top: 0.6em;
  animation: ${fadeInAnimation} 1s both;
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

const Title = styled.h5`
  margin: 10px 0 0 0;
  padding-top: 0.5em;
  margin-bottom: 5px;
  letter-spacing: 2px;

  @media screen and (min-width: 600px) {
    font-size: 1.1rem;
  }
`;

const images = [
  'src/assets/img/pexels-ivan-samkov-4989168.jpg',
  '/src/assets/img/teamPic1.jpg',
  '/src/assets/img/teamPic2.jpg',
  '/src/assets/img/teamPic3.jpg',
  '/src/assets/img/teamPic4.jpg',
  '/src/assets/img/teamPic5.jpg',
];

const imageTexts = [
  'DR SANCHEZ',
  'DARIO & KAROLA',
  'MARIA CHIRINOS',
  'ANA OCHOA',
  'XIMENA CANARIAS',
  'PEDRO ALVAREZ',
];
const personTitle = [
  '',
  'MEDIZINISCHE FACHANGESTELLTE',
  'MEDIZINISCHE FACHANGESTELLTE',
  'MEDIZINISCHE FACHANGESTELLTE',
  'MEDIZINISCHE FACHANGESTELLTE',
];

const TeamMembersSection = ({ handleClickTeamMembersClose }) => {
  return (
    <>
      <Container>
        <div onClick={handleClickTeamMembersClose}>
          <CloseContent />
        </div>
        <h3>Willkommen</h3>
        <List>
          {images.map((image, index) => (
            <ListItem key={index}>
              <Title>{imageTexts[index]}</Title>
              <Title>{personTitle[index]}</Title>
              <Image src={image} alt={`Slide ${index + 1}`} />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};
export default TeamMembersSection;
