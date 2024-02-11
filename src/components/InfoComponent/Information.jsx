/* eslint-disable no-undef */
import styled from 'styled-components';
import ContactIcon from '../HomePage/Header/ContactIcon';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-right: auto;
    margin-left: auto;
    width: 95%;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 400px;
    background-color: #6b0000;
    padding: 1em;
    box-shadow: 0px 2px 2px 0px #5c0000;
    border-radius: var(--border-radius);
  }
`;

const phoneNumber = '+4915221881393';

const handleTelClick = () => {
  window.location.href = 'tel:+123456789';
  console.log('Click en 1');
};

const handleEmailClick = () => {
  const emailAddress = 'saavedra.ramon.brand@gmail.com';

  const mailtoLink = `mailto:${emailAddress}`;

  window.location.href = `https://wa.me/${phoneNumber}`;
  window.location.href = mailtoLink;
};

const handleWhatsAppClick = () => {
  window.location.href = `https://wa.me/${phoneNumber}`;
};

// eslint-disable-next-line react/prop-types, no-unused-vars
const Information = () => {
  const navigate = useNavigate();

  const handleIcon2Click = () => {
    navigate('/map');
  };
  const handleIcon3Click = () => {
    navigate('/emergency');
  };

  return (
    <>
      <Container>
        <ContactIcon
          iconInfo="Info 1"
          onClick={handleTelClick}
          path={
            <svg
              viewBox="0 0 448 512"
              fill="var(--secundary-color)"
              height="70%"
              width="70%">
              <path
                className="specific-path1"
                d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384 196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"
              />
            </svg>
          }
        />
        <Link>
          <ContactIcon
            iconInfo="Info 2"
            onClick={handleIcon2Click}
            path={
              <svg
                fill="var(--secundary-color)"
                height="70%"
                width="70%"
                viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            }
          />
        </Link>
        <ContactIcon
          iconInfo="Info 3"
          onClick={handleIcon3Click}
          path={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="var(--secundary-color)"
              height="70%"
              width="70%"
              viewBox="0 0 576 512">
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H96V32H64zm64 0V480H448V32H128zM512 480c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H480V480h32zM256 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H320v48c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V288H208c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16h48V176z" />
            </svg>
          }
        />
        <ContactIcon
          iconInfo="Info 4"
          onClick={handleEmailClick}
          path={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="var(--secundary-color)"
              height="70%"
              width="70%"
              viewBox="0 0 512 512">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          }
        />
        <ContactIcon
          iconInfo="Info 5"
          onClick={handleWhatsAppClick}
          path={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgba(30, 130, 76)"
              height="70%"
              width="70%"
              viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          }
        />
      </Container>
    </>
  );
};

export default Information;
