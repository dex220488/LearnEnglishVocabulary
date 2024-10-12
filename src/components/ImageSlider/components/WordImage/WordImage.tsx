import React from "react";
import { Word } from "../../../../assets/data/data";
import { DATA_IMAGE_SRC } from "../../../../constants";
import { StyledImage, StyledImageContainer, StyledInfoContainer } from "./WordImage.styles";
import InfoIcon from "@mui/icons-material/Info";
import { Typography } from "@mui/material";

type ImageProps = {
  word: Word;
};

export const WordImage: React.FC<ImageProps> = ({ word }) => {
  const { id, value, meaning } = word;
  const imageSrc = `${DATA_IMAGE_SRC}${value.toLowerCase()}.jpeg`;
  const [showInfo, setShowInfo] = React.useState(true);

  return (
    <StyledImageContainer key={id}>
      <StyledImage src={imageSrc} alt={value} onClick={() => setShowInfo(!showInfo)} />
      {showInfo && (
        <StyledInfoContainer>
          <InfoIcon />
          <Typography variant='body1' component='body'>
            {meaning}
          </Typography>
        </StyledInfoContainer>
      )}
    </StyledImageContainer>
  );
};
