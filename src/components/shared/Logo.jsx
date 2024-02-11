import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid var(--primary-color);
  background-color: var(--secundary-color);
  &:active {
    background-color: var(--active-color);
    border: 1px solid var(--border-active-color);
  }

  @media screen and (min-width: 600px) {
    width: 50px;
    height: 50px;
    /* margin-bottom: 30px; */

    svg {
      width: 42px; // Nuevo ancho para pantallas mayores a 600px
      height: 38px; // Nuevo alto para pantallas mayores a 600px
    }
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    /* margin-bottom: 40px; */
  }
  @media screen and (min-width: 1024px) {
    width: 50px;
    height: 50px;
    &:hover {
      background-color: var(--primary-colorTwo);
      border: 3px solid var(--secundary-color);
      svg path {
        fill: var(--secundary-color);
      }
    }
  }
`;

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          fill="var(--primary-color)"
          height="32"
          width="28"
          viewBox="0 0 384 512">
          <path d="M384 312.7c-55.1 136.7-187.1 54-187.1 54-40.5 81.8-107.4 134.4-184.6 134.7-16.1 0-16.6-24.4 0-24.4 64.4-.3 120.5-42.7 157.2-110.1-41.1 15.9-118.6 27.9-161.6-82.2 109-44.9 159.1 11.2 178.3 45.5 9.9-24.4 17-50.9 21.6-79.7 0 0-139.7 21.9-149.5-98.1 119.1-47.9 152.6 76.7 152.6 76.7 1.6-16.7 3.3-52.6 3.3-53.4 0 0-106.3-73.7-38.1-165.2 124.6 43 61.4 162.4 61.4 162.4 .5 1.6 .5 23.8 0 33.4 0 0 45.2-89 136.4-57.5-4.2 134-141.9 106.4-141.9 106.4-4.4 27.4-11.2 53.4-20 77.5 0 0 83-91.8 172-20z" />
        </svg>
      </Link>
    </Container>
  );
};

export default Logo;
