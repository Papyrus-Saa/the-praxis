import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* eslint-disable react/no-unknown-property */



const Container = styled.div`
/* padding: 1em; */
`
const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 0.2em;
  border: 1px solid var(--primary-color);
  border-radius: var(--border-radius);

  &:hover {
    background-color: var(--primary-color);

    svg {
      stroke: var(--text-color);
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Paragraph = styled.p`
  display: block;
  color: var(--primary-color);
  &:hover {
    color: var(--text-color);
  }
`;

const HomeComponent = () => {
  return (
    <>
      <Container>
        <ContainerLogo>
          <StyledLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--primary-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M3 10.5L12 3l9 7.5M21 10.5v10.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5" />
            </svg>
            <Paragraph>Startseite</Paragraph>
          </StyledLink>
        </ContainerLogo>
      </Container>
    </>
  );
};

export default HomeComponent;
