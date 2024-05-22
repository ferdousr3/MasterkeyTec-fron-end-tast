/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #007bff;
  font-weight: 500;

  &.active {
    color: #0056b3;
    font-weight: 700;
  }

  &:hover {
    color: #0056b3;
  }
`;

const CompanyName = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <CompanyName>Masterkey Technologies</CompanyName>
      <NavLinks>
        <StyledNavLink to="/" >
          Home
        </StyledNavLink>
        <StyledNavLink to="/al-tile-int">
          Al Tile
        </StyledNavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;