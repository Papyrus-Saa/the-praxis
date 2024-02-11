import { useEffect, useState } from 'react';
import styled from 'styled-components';

import pic0 from '../../../assets/img/img0.jpg';
import pic7 from '../../../assets/img/img7.jpg';
import pic2 from '../../../assets/img/img2.jpg';
import pic3 from '../../../assets/img/img3.jpg';
import pic4 from '../../../assets/img/img4.jpg';
import pic5 from '../../../assets/img/img5.jpg';
import pic6 from '../../../assets/img/img6.jpg';

const images = [pic0, pic7, pic2, pic3, pic4, pic5, pic6];

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  
  @media screen and (min-width: 600px) {
    height: 500px;
    margin-bottom: 20px;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    height: 600px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1040px) {
    height: 600px;
    margin-bottom: 50px;

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
