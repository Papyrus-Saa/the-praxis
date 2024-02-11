import styled from 'styled-components';
import HomeComponent from '../shared/HomeComponent';
import Footer from '../shared/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  text-align: center;
`;
const ContainerContent = styled.div`
  padding: 1em;
`;
const Title = styled.span`
  display: block;
  font-size: 1.3em;
  margin-bottom: 20px;

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`;
const Paragraph = styled.p`
  margin-bottom: 40px;
  @media screen and (min-width: 1400px) {
    width: 50%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 60px;
  }
`;

export const DataProtection = () => {
  return (
    <>
      <Container>
        <ContainerContent>
          <HomeComponent />
          <Title>Datenschutzerklärung</Title>
          <Paragraph>
            In unserem Bestreben, deine Privatsphäre und den Schutz deiner Daten
            zu gewährleisten, möchten wir dich darüber informieren, wie wir
            persönliche Informationen behandeln, die wir sammeln, wenn du unsere
            Website nutzt.
          </Paragraph>
          <h2>Informationen, die wir sammeln</h2>
          <Paragraph>
            Wir sammeln Informationen wie deinen Namen, deine E-Mail-Adresse und
            deine Browservorlieben, wenn du mit unserer Website interagierst.
          </Paragraph>
          <h2>Verwendung der Informationen</h2>
          <Paragraph>
            Die gesammelten Informationen verwenden wir, um deine Erfahrung zu
            personalisieren, unsere Website zu verbessern und relevante
            Aktualisierungen zu senden.
          </Paragraph>
          <h2>Datenschutz für Minderjährige</h2>
          <Paragraph>
            Unsere Website richtet sich nicht an Personen unter 13 Jahren, und
            wir sammeln nicht absichtlich personenbezogene Daten von ihnen.
          </Paragraph>
        </ContainerContent>
        <Footer />
      </Container>
    </>
  );
};

// export default DataProtection;
