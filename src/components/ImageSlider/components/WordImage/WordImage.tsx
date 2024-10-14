import React from "react";
import { Word } from "../../../../assets/data/data";
import { DATA_IMAGE_SRC } from "../../../../constants";
import {
  StyledHintBox,
  StyledImage,
  StyledImageContainer,
  StyledInfoContainer,
} from "./WordImage.styles";
import InfoIcon from "@mui/icons-material/Info";
import { Typography } from "@mui/material";

type ImageProps = {
  word: Word;
};

export const WordImage: React.FC<ImageProps> = ({ word }) => {
  const { id, value, meaning } = word;
  const imageSrc = `${DATA_IMAGE_SRC}${value.toLowerCase()}.jpeg`;
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <StyledImageContainer key={id}>
      <StyledImage src={imageSrc} alt={value} />
      {showInfo ? (
        <StyledHintBox onClick={() => setShowInfo(!showInfo)}>
          <InfoIcon />
          <Typography variant='body2' component='body'>
            {meaning}
          </Typography>
        </StyledHintBox>
      ) : (
        <StyledInfoContainer onClick={() => setShowInfo(!showInfo)}>
          <Typography variant='h5' component='h5'>
            Show Hint
          </Typography>
        </StyledInfoContainer>
      )}
    </StyledImageContainer>
  );
};
