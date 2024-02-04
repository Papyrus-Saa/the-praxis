import { useEffect, useState } from 'react';
import styled from 'styled-components';

const images = [
  '/src/assets/img/img0.jpg',
  '/src/assets/img/img7.jpg',
  '/src/assets/img/img2.jpg',
  '/src/assets/img/img3.jpg',
  '/src/assets/img/img4.jpg',
  '/src/assets/img/img5.jpg',
  '/src/assets/img/img6.jpg',
];

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;

  @media screen and (min-width: 600px) {
    height: 500px;
    object-fit: cover;
  }
`;

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </>
  );
};

export default SimpleCarousel;
