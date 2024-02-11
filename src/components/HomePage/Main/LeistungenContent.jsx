// /* eslint-disable react/prop-types */
// import styled, { keyframes } from 'styled-components';
// import { useState, useEffect } from 'react';

// const fadeInAnimation = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;

// const Container = styled.div`
//   position: relative;
//   text-align: center;
//   padding: 2em 0.6em;
//   width: 100%;
//   background-color: var(--bg-color);
//   border-bottom: 15px solid #e9e9e9;

//   @media screen and (min-width: 600px) {
//     width: 80%;
//     margin-right: auto;
//     margin-left: auto;
//     border: 0.1px solid var(--active-color);
//     color: var(--border-color);
//     border-radius: var(--border-radius);
//     margin-bottom: 10px;
//   }

//   @media screen and (min-width: 1400px) {

//     width: 50%;
//   }
// `;

// const Title = styled.h3`
//   margin-bottom: 10px;
//   color: var(--secundary-color);
//   font-size: 1rem;

//   @media screen and (min-width: 600px) {
//     font-size: 1.2rem;
//   }
// `;

// const SpanOpen = styled.span`
//   display: block;
//   color: var(--primary-color);
//   margin-bottom: 5px;

//   @media screen and (min-width: 600px) {
//     font-size: 1.2rem;
//   }
// `;
// const SpanClose = styled.span`
//   color: var(--primary-color);
//   display: block;
//   margin-top: 5px;

//   @media screen and (min-width: 600px) {
//     font-size: 1.2rem;
//   }
// `;

// const Paragraph = styled.p`
//   padding: 1em;
//   background-color: #f5f5f5;
//   box-shadow: 0px 1px 3px 0px rgba(211, 211, 211, 0.75);
//   border-radius: var(--border-radius);
//   animation: ${fadeInAnimation} 1s both;

//   @media screen and (min-width: 600px) {
//     padding: 1.6em;
//   }
// `;

// const LeistungenContent = ({ isOpen, handleClickClose, title, text }) => {
//   const [showParagraph, setShowParagraph] = useState(true);

//   const handleClick = () => {
//     setShowParagraph(true);
//   };

//   // eslint-disable-next-line no-unused-vars
//   const handleClose = () => {
//     setShowParagraph(false);
//     handleClickClose();
//   };

//   const handleSpanClose = () => {
//     setShowParagraph(false);
//   };

//   useEffect(() => {
//     // Esta función se ejecuta cuando el componente se desmonta
//     return () => {
//       setShowParagraph(false); // Restablecer el estado cuando el componente se desmonta
//     };
//   }, []);

//   return (
//     <>
//       {isOpen && (
//         <Container>
//           <Title>{title}</Title>
//           <SpanOpen onClick={handleClick}>Mehr...</SpanOpen>
//           {showParagraph && (
//             <Paragraph>
//               {text}
//               <SpanClose onClick={handleSpanClose}>Weniger</SpanClose>
//             </Paragraph>
//           )}
//         </Container>
//       )}
//     </>
//   );
// };

// export default LeistungenContent;
