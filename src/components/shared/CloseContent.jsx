/* eslint-disable react/prop-types */
import styled from 'styled-components';


const ContainerX = styled.button`
  position: absolute;
  display: block;
  top: 10px;
  right: 10px;
  width: 22px;
  height: 22px;
  outline: none;
  border: none;
  background-color: var(--primary-colorTwo);
  border-radius: 50%;
`;

const CloseContent = ({handleClickClose}) => {
  
  return (
    <ContainerX onClick={handleClickClose}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="var(--text-color)"
        height="100%"
        width="100%"
        viewBox="0 0 384 512">
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
    </ ContainerX>
  )
    
};


export default CloseContent;
