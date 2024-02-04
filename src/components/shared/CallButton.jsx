import styled from "styled-components";


const Call = styled.a`
  display: block;
  width: auto;
  max-width: 180px;
  margin-right: auto;
  margin-left: auto;
  border-radius: var(--border-radius);
  padding: 0.6em 2em;
  margin-bottom: 20px;
  background-color: var(--primary-color);
  color: var(--text-color);
  box-shadow: 0px 4px 5px -1px rgba(0, 0, 0, 0.35);

  @media screen and (min-width: 600px) {
    font-size: 1.2rem;
  }
`;

const CallButton = () => {
  return (
    <>
      <Call href="tel:">+123456789</Call>
    </>
  );
};

export default CallButton;
