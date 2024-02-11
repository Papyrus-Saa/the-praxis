/* eslint-disable react/prop-types */
import styled, { keyframes } from 'styled-components';
import CallButton from '../shared/CallButton';
import HomeComponent from '../shared/HomeComponent';

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
  text-align: center;
  padding: 2em 0.6em 1em;
  animation: ${fadeInAnimation} 1.5s both;
`;

const Title = styled.h3`
  color: rgb(216, 49, 49);
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const ListItem = styled.li`
  margin-bottom: 20px;
  color: rgb(163, 78, 78);
`;
const TitleContent = styled.h4`
  margin-bottom: 20px;
`;

const Emergency = ({ closeEmergency }) => {
  return (
    <>
      <Container>
        <HomeComponent />
        <div onClick={closeEmergency}> </div>
        <Title>Wichtige Informationen für Notfälle</Title>

        <List>
          <ListItem>
            <TitleContent>Exklusive Notrufnummer:</TitleContent> Wir bitten Sie,
            diese Nummer ausschließlich für Notfälle zu verwenden.
          </ListItem>
          <ListItem>
            <TitleContent>
              Vereinbaren Sie einen Termin für nicht dringende Anliegen:
            </TitleContent>{' '}
            Falls Ihre Situation keine Notlage darstellt, leiten wir Sie höflich
            dazu an, Ihren Termin für den nächsten Tag zu vereinbaren.
          </ListItem>
          <ListItem>
            <TitleContent>Hausbesuche nur bei Anwesenheit:</TitleContent> Wir
            bieten Hausbesuche nur an, wenn Sie sich zu Hause aufhalten, um
            Ihnen eine schnellere Betreuung zu ermöglichen.
          </ListItem>
          <ListItem>
            <TitleContent>Servicemöglichkeiten rund um die Uhr:</TitleContent>{' '}
            Wir stehen Ihnen rund um die Uhr zur Verfügung, um medizinische
            Notfälle zu behandeln.
          </ListItem>
          <ListItem>
            <TitleContent>Geschätzte Reaktionszeit:</TitleContent> Unsere
            Unterstützung erfolgt zügig, mit einer geschätzten Reaktionszeit von
            etwa 30 Minuten.
          </ListItem>
          <ListItem>
            <TitleContent>Sichtbare Rufnummer erforderlich:</TitleContent> Um
            eine effektive Betreuung zu gewährleisten, bitten wir Sie, die
            Rufnummer sichtbar zu lassen. Leider können wir Anrufe von anonymen
            Nummern nicht entgegennehmen.
          </ListItem>
        </List>

        <CallButton />
      </Container>
    </>
  );
};

export default Emergency;
