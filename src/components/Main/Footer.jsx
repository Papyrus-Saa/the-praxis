import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../shared/Logo';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 1.3em 0.5em;
  background-color: var(--primary-colorTwo);
`;

const LogoContainer = styled.footer`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

const LegalContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 180px;
  color: var(--text-color);
`;

const Links = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <LegalContent>
          <Links to="/legalNotice">Impressum</Links>
          <Links to="/dataProtection">Datenschutz</Links>
        </LegalContent>
      </FooterContainer>
    </>
  );
};

export default Footer;
