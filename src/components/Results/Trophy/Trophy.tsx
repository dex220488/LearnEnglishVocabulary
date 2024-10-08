import { GLOBAL_IMAGE_SRC } from "../../../constants/appConstants";
import { Confetti, StyledImage, StyledImageContainer } from "./Trophy.styles";
import React from "react";

type TrophyProps = {
  onClick: () => void;
};

const Trophy: React.FC<TrophyProps> = ({ onClick }) => {
  const confettiPieces = Array.from({ length: 50 }, (_, index) => ({
    key: index,
    color: ["red", "yellow", "blue", "green", "orange"][index % 5], // Different colors
    leftPosition: `${Math.random() * 100}vw`,
    topPosition: `${Math.random() * 300}px`, // Random vertical start position (increase rows)
  }));

  return (
    <StyledImageContainer onClick={onClick}>
      <StyledImage src={`${GLOBAL_IMAGE_SRC}trophy.webp`} />
      {confettiPieces.map((piece) => (
        <Confetti
          key={piece.key}
          style={{
            backgroundColor: piece.color,
            left: piece.leftPosition,
            top: piece.topPosition,
          }}
        />
      ))}
    </StyledImageContainer>
  );
};

export default Trophy;
