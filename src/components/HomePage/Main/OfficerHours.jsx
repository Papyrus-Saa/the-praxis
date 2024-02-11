/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import styled from 'styled-components';

const hours = {
  Montag: '07:30 - 13:00',
  Dienstag: '07:30 - 17:00',
  Mittwoch: '07:30 - 13:00',
  Donnerstag: '07:30 - 17:00',
  Freitag: '07:30 - 14:30',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  padding: 0 0.3em 0.3em;
  margin-right: auto;
  margin-left: auto;
  margin: 20px 10px;
  border-radius: var(--border-radius);
  text-align: center;
  border: 1px solid var(--primary-colorTwo);

  @media screen and (min-width: 768px) {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: 1400px) {
    width: 60%;
    margin-right: auto;
    margin-left: auto;
  }
`;
const Title = styled.span`
  display: block;
  font-size: 1.3rem;
  padding: 0.5em;

  @media screen and (min-width: 600px) {
    font-size: 1.7rem;
  }
`;
const Days = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  padding: 0.5em;
  color: var(--primary-color);

  @media screen and (min-width: 600px) {
    width: 400px;
    font-size: 1.2rem;
  }
`;

// const Hours = styled.div``;

const HoursContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0.5em;
  border-radius: var(--border-radius);
  background-color: var(--active-color);
  color: var(--text-color);

  @media screen and (min-width: 600px) {
    font-size: 1.2rem;
  }
`;

const List = styled.ul`
  width: 90%;
  list-style: none;
  padding: 0;
  text-align: center;
  margin-top: 30px;
`;
const ListTitle = styled.span`
  display: block;
  font-size: 1.3rem;
  padding: 0.3em;
  background-color: #a08181;
`;

const ListItem = styled.li`
  padding-bottom: 0.8em;
  margin-bottom: 15px;
  background-color: #d6d6d6;
`;

const OfficeHours = () => {
  return (
    <Container>
      <Title>Sprechzeiten</Title>
      {Object.entries(hours).map(([day, time]) => (
        <div key={day}>
          <Days>{day}</Days>
          <HoursContent>{time}</HoursContent>
        </div>
      ))}

      <List>
        <ListItem>
          <ListTitle>Montag</ListTitle>
          <List>
            <li>8.00 - 12.30 Uhr und 15.00 - 18.30 Uhr</li>
            <li>
              ohne Termin 8.00 - 11.00 Uhr bei telefonischer Anmeldung bis 10.00
              Uhr und 15.00 - 17.00 Uhr bei telefonischer Anmeldung bis 16.30
              Uhr
            </li>
          </List>
        </ListItem>
        <ListItem>
          <ListTitle>Dienstag</ListTitle>
          <List>
            <li>8.00 - 12.30 Uhr</li>
            <li>
              ohne Termin 8.00 - 11.00 Uhr bei telefonischer Anmeldung bis 10.00
              Uhr
            </li>
          </List>
        </ListItem>
        <ListItem>
          <ListTitle>Mittwoch</ListTitle>
          <List>
            <li>8.00 - 12.30 Uhr</li>
            <li>
              ohne Termin 8.00 - 11.00 Uhr bei telefonischer Anmeldung bis 10.00
              Uhr
            </li>
          </List>
        </ListItem>
        <ListItem>
          <ListTitle>Donnerstag</ListTitle>
          <List>
            <li>8.00 - 12.30 Uhr</li>
            <li>
              ohne Termin 8.00 - 11.00 Uhr bei telefonischer Anmeldung bis 10.00
              Uhr
            </li>
          </List>
        </ListItem>
        <ListItem>
          <ListTitle>Freitag</ListTitle>
          <List>
            <li>8.00 - 12.30 Uhr</li>
            <li>
              ohne Termin 8.00 - 11.00 Uhr bei telefonischer Anmeldung bis 10.00
              Uhr
            </li>
          </List>
        </ListItem>
      </List>
    </Container>
  );
};

export default OfficeHours;
