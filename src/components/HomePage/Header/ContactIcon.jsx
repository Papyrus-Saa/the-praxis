import styled, {  } from 'styled-components';



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid var(--secundary-color);
  border-radius: 3px;

  @media screen and (min-width: 600px) {
    width: 45px;
    height: 45px;
  }

  @media screen and (min-width: 1024px) {
    box-shadow: 0px 2px 2px 0px #5c0101;
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
  &:active {
    border: 1px solid var(--active-color);
  }
  &:hover {
    background-color: var(--active-color);
    svg path {
      fill: var(--primary-colorTwo);
    }
  }
`;

// eslint-disable-next-line react/prop-types
const ContactIcons = ({ path, onClick, iconInfo }) => {
  return (
    <>
      <Container onClick={() => onClick(iconInfo)}>{path}</Container>
    </>
  );
};

export default ContactIcons;
