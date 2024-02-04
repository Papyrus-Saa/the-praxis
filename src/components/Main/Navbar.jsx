/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid var(--text-color);

  @media screen and (min-width: 1400px) {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  list-style-type: none;
  padding: 0;
  gap: 10px;
  margin: 10px;
  `;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0.6em;
  margin-bottom: 20px;
  border: 1px solid var(--primary-color);
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
  }

  @media screen and (min-width: 600px) {
    padding: 0.8em;
  }

  @media screen and (min-width: 1400) {
    padding: .2em;
    background-color: #df1313;
  }

  &:active {
    background-color: var(--primary-color);
    color: var(--text-color);
  }
`;

const Links = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  color: var(--secundary-color);
  &:active {
    color: var(--text-color);
  }
  @media screen and (min-width: 600px) {
    font-size: 1.2rem;

    &:hover {
      color: var(--text-color);
    }
  }
`;

const navbarContent = [
  'Leistungen',
  'Die Praxis',
  'Das Praxisteam',
  'Spechstundenzeiten',
  'Impressum',
  'Datenschutz',
];

const Navbar = ({
  handleClick,
  handleClickCarouselOpen,
  handleClickTeamMembersOpen,
  handleClickOfficerOpen,
}) => {
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    const itemActions = {
      Leistungen: () => {
        handleClick();
      },
      'Die Praxis': () => {
        handleClickCarouselOpen();
      },
      'Das Praxisteam': () => {
        handleClickTeamMembersOpen();
      },
      Spechstundenzeiten: () => {
        handleClickOfficerOpen();
      },
      Impressum: '/legalNotice',
      Datenschutz: () => {
        navigate('/dataProtection');
      },
    };

    const selectedAction = itemActions[itemName];

    if (selectedAction) {
      if (typeof selectedAction === 'function') {
        selectedAction();
      } else if (typeof selectedAction === 'string') {
        navigate(selectedAction);
      }
    }
  };

  return (
    <Nav>
      <List>
        {navbarContent.map((item, index) => (
          <ListItem key={index} onClick={() => handleItemClick(item)}>
            <Links to={`#${item.toLowerCase()}`}>{item}</Links>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
};

export default Navbar;
