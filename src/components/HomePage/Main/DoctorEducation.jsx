import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;
  padding: 1.5em;

  @media screen and (min-width: 768px) {
    width: 90%;
    border: 1px solid var(--active-color);
    margin-right: auto;
    margin-left: auto;
    border-radius: var(--border-radius);
  }
  @media screen and (min-width: 1400px) {
    width: 50%;
    border: 1px solid var(--active-color);
    margin-right: auto;
    margin-left: auto;
    border-radius: var(--border-radius);
  }
`;
const Paragraph = styled.span`
  display: block;
  color: var(--primary-color);
  margin-bottom: 30px;
  padding: 0.6em;
  font-size: 1.1rem;
  text-align: center;

  @media screen and (min-width: 600px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;
const List = styled.ul`
  width: 90%;
  list-style: none;
  text-align: center;

  @media screen and (min-width: 600px) {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

const DoctorEducation = () => {
  return (
    <>
      <Container>
        <Paragraph>
          Absolviertes Studium der Allgemeinmedizin mit umfangreicher Erfahrung:
        </Paragraph>
        <List>
          <ListItem>
            Medizinstudium an der Semmelweis Universität, Budapest
          </ListItem>
          <ListItem>
            Internationale klinische Rotationen am Trinity College Hospital,
            Dublin, und an der University of Minnesota, Minneapolis
          </ListItem>
          <ListItem>
            Spezialisierung in Kardiologie und Stroke Unit am Klinikum Coburg
          </ListItem>
          <ListItem>Führung in Echokardiographie und Gefäßdiagnostik</ListItem>
          <ListItem>
            Teilnahme an einem Doktorandenprogramm in Medizin an der Universität
            Split, Kroatien
          </ListItem>
        </List>
      </Container>
    </>
  );
};

export default DoctorEducation;
