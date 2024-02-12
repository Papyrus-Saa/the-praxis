/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import styled, {keyframes} from 'styled-components';
import HomeComponent from '../../shared/HomeComponent';

import bgPic from '../../../assets/img/4medical-5478792_1280.jpg'

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 1em;
  animation: ${fadeInAnimation} 1s both;
  background-image: url(${bgPic});
  background-position: center;
  object-fit: cover;
`;
const TitleSpan = styled.span`
font-size: 1.3rem;
display: block;
text-align: center;
margin-bottom: 20px;
`

const List = styled.ul`
  width: 95%;
  margin: 0 auto;
  text-align: center;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 1024px) {
    width: 70%;
  }
  @media screen and (min-width: 1400px) {
    width: 40%;
    color: var(--text-color);
  }
`;

const SubTitle = styled.h3`
margin-bottom: 10px;
`

const ListItem = styled.li`
  padding: 1em;
  margin-bottom: 20px;
  background-color: #ececec8d;
  box-shadow: -1px 0px 4px 0px rgba(204, 204, 204, 0.75);

  @media screen and (min-width: 1024px) {
    background-color: #6363638d;
  }
`;


const Leistungen = ( ) => {
  return (
    <>
      <Container>
        <HomeComponent/>
        <TitleSpan>Gesundheitsleistungen</TitleSpan>
        <List>
          <ListItem>
            <SubTitle>Terminvergabe</SubTitle>
            <p>
              Vereinbaren Sie einfach Termine für Arztbesuche nach Ihren
              Bedürfnissen und Zeitplänen.
            </p>
          </ListItem>
          <ListItem>
            <SubTitle>Rezeptbestellung</SubTitle>
            <p>
              Bestellen Sie schnell Ihre ärztListItemchen Rezepte bequem von zu Hause
              aus.
            </p>
          </ListItem>
          <ListItem>
            <SubTitle>Hausarztzentrierte Versorgung (HZV)</SubTitle>
            <p>
              Profitieren Sie von einer umfassenden medizinischen Versorgung und
              Betreuung durch Ihren Hausarzt.
            </p>
          </ListItem>
          <ListItem>
            <SubTitle>Ketamin-Infusion bei Depression</SubTitle>
            <p>
              Erkunden Sie innovative BehandlungsmögListItemchkeiten für Depressionen
              mittels Ketamin-Infusionen.
            </p>
          </ListItem>
          <ListItem>
            <SubTitle>Psychosomatische Grundversorgung</SubTitle>
            <p>
              Erhalten Sie ganzheitListItemche Unterstützung bei psychosomatischen
              Beschwerden zur Förderung von Gesundheit und Wohlbefinden.
            </p>
          </ListItem>
          <ListItem>
            <SubTitle>Chirotherapie</SubTitle>
            <p>
              Erfahren Sie SchmerzListItemnderung und Verbesserung der BewegListItemchkeit
              durch muskuloskeletale Manipulationstechniken.
            </p>
          </ListItem>
          <ListItem>
            <SubTitle>Laboruntersuchungen</SubTitle>
            <p>
              Führen Sie Blut-, Urin- und Stuhluntersuchungen durch, um Ihre
              Gesundheit zu bewerten und mögListItemche medizinische Probleme zu
              erkennen.
            </p>
          </ListItem>
          <ListItem>
            <SubTitle>Impfungen</SubTitle>
            <p>
              Schützen Sie Ihre Gesundheit und die Ihrer ListItemeben durch Impfungen
              gegen häufige Krankheiten.
            </p>
          </ListItem>
          <ListItem>
            <SubTitle>EKG</SubTitle>
            <p>
              Erhalten Sie eine elektrische Aufzeichnung der Herzaktivität zur
              Diagnose von Herzproblemen.
            </p>
          </ListItem>
          <ListItem>
            <SubTitle>Langzeit-EKG</SubTitle>
            <p>
              Überwachen Sie Ihre Herzaktivität über einen längeren Zeitraum für
              eine genauere Diagnose und angemessene Behandlung.
            </p>
          </ListItem>
        </List>
      </Container>
    </>
  );
};

export default Leistungen;
