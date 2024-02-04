import styled from 'styled-components';
import CallButton from './CallButton';

const ContainerContact = styled.div`
  text-align: center;
  padding: 1em;
`;
const ContainerSpan = styled.span`
  display: block;
  font-size: 1.3rem;
  margin-bottom: 10px;

  @media screen and (min-width: 600px) {
    font-size: 1.5em;
  }
`;
const ContainerItem = styled.p`
  margin-bottom: 5px;
  background-color: #e7e7e7;

  @media screen and (min-width: 600px) {
    margin-bottom: 15px;
  }
`;
const ContainerItemTlf = styled.p`
  margin-bottom: 25px;
  background-color: #e7e7e7;

  @media screen and (min-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Contact = () => {
  return (
    <>
      <ContainerContact>
        <ContainerSpan>Praxis Sanchez</ContainerSpan>
        <ContainerItem> Ramonstr 36 </ContainerItem>
        <ContainerItem> 48529 Nordhorn </ContainerItem>
        <ContainerItemTlf> Tel 01234 12345 | Fax 01234 12345 </ContainerItemTlf>
        <CallButton />
      </ContainerContact>
    </>
  );
};

export default Contact;
