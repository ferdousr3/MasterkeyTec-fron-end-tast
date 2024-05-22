import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  color: #333;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
`;

const HomeButton = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <HomeButton to="/">Go Back Home</HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;