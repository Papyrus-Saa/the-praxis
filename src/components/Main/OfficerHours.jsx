/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import styled from 'styled-components';
import CloseContent from '../shared/CloseContent';

const hours = {
  Montag: '07:30 - 13:00',
  Dienstag: '07:30 - 17:00',
  Mittwoch: '07:30 - 13:00',
  Donnerstag: '07:30 - 17:00',
  Freitag: '07:30 - 14:30',
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 90vh;
  padding: 0 0.3em 0.3em;
  margin-right: auto;
  margin-left: auto;
  margin: 10px;
  border-radius: var(--border-radius);
  text-align: center;
  border: 1px solid var(--primary-colorTwo);

  @media screen and (min-width: 768px) {
    width: 90%;
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
  height: 60px;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  padding: 0.5em;
  background-color: var(--primary-colorTwo);
  color: var(--text-color);

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
  height: 60px;
  padding: 0.5em;
  border-radius: var(--border-radius);
  background-color: var(--active-color);
  color: var(--text-color);

  @media screen and (min-width: 600px) {
    font-size: 1.2rem;
  }
`;

const OfficeHours = ({ handleClickOficcerClose }) => {
  return (
    <Container>
      <div onClick={handleClickOficcerClose}>
        <CloseContent />
      </div>
      <Title>Sprechzeiten</Title>
      {Object.entries(hours).map(([day, time]) => (
        <div key={day}>
          <Days>{day}</Days>
          <HoursContent>{time}</HoursContent>
        </div>
      ))}
    </Container>
  );
};

export default OfficeHours;
