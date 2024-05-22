import React from 'react';
import styled from 'styled-components';

const TileButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  font-size: 24px;
  cursor: pointer;
`;

interface TileProps {
  letter: string;
  onClick: (letter: string) => void;
}

const Tile: React.FC<TileProps> = ({ letter, onClick }) => {
  return (
    <TileButton onClick={() => onClick(letter)}>
      {letter}
    </TileButton>
  );
};

export default Tile;
