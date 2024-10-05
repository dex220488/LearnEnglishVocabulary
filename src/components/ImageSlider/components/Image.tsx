import React from 'react';
import { styled } from '@mui/material';
import { Word } from '../../../assets/data/data';
import { DATA_IMAGE_SRC } from '../../../constants';

const StyledImage = styled('img')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  height: 'auto',
}));

const StyledImageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

type ImageProps = {
  word: Word;
};

export const Image: React.FC<ImageProps> = ({ word }) => {
  const { id, value } = word;
  const imageSrc = `${DATA_IMAGE_SRC}${value.toLowerCase()}.jpg`;

  return (
    <StyledImageContainer key={id}>
      <StyledImage src={imageSrc} alt={value} />
    </StyledImageContainer>
  );
};
