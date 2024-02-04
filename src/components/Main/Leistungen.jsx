/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import styled, {keyframes} from 'styled-components';
import LeistungenContent from './LeistungenContent';
import servicesData from './objectServiceData';
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
  width: 100%;
  animation: ${fadeInAnimation} 1s both;
`;
const Close = styled.div`
  height: 50px;
`;

const Leistungen = ({ isOpen, handleClickClose }) => {
  return (
    <>
      <Container>
        {isOpen && (
          <>
            <Close onClick={handleClickClose}>
              <CloseContent />
            </Close>
            {/* <h1 onClick={handleClickClose}>X</h1> */}
            {servicesData.map((service, index) => (
              <LeistungenContent
                key={index}
                handleClickClose={handleClickClose}
                isOpen={isOpen}
                title={service.title}
                text={service.content}
              />
            ))}
          </>
        )}
      </Container>
    </>
  );
};

export default Leistungen;
