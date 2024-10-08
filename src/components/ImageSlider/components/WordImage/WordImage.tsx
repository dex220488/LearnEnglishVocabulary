import React from "react";
import { Word } from "../../../../assets/data/data";
import { DATA_IMAGE_SRC } from "../../../../constants";
import { StyledImage, StyledImageContainer } from "./WordImage.styles";

type ImageProps = {
  word: Word;
};

export const WordImage: React.FC<ImageProps> = ({ word }) => {
  const { id, value } = word;
  const imageSrc = `${DATA_IMAGE_SRC}${value.toLowerCase()}.jpg`;

  return (
    <StyledImageContainer key={id}>
      <StyledImage src={imageSrc} alt={value} />
    </StyledImageContainer>
  );
};
