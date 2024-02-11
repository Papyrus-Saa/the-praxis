import styled from 'styled-components';
import Pic from '../../../assets/img/pexels-ivan-samkov-4989168.jpg';


const ImgContainer = styled.div`
  width: 120px;
  height: 120px;
  margin-right: auto;
  margin-left: auto;
  padding: 0.6em;
  margin-bottom: 35px;
  border-radius: 3px;

  @media screen and (min-width: 600px) {
    width: 180px;
    height: 180px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 140px;
    height: 140px;
  }
`;

const ImgPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Img = () => {
  return (
    <ImgContainer>
      <ImgPic src={Pic} alt="Dr pic" />;
    </ImgContainer>
  );
};

export default Img;

