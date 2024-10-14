import { GLOBAL_IMAGE_SRC } from "../../../constants/appConstants";
import { Confetti, StyledImage, StyledImageContainer } from "./Trophy.styles";
import React from "react";

const Trophy: React.FC = () => {
  const confettiPieces = Array.from({ length: 50 }, (_, index) => ({
    key: index,
    color: ["red", "yellow", "blue", "green", "orange"][index % 5], // Different colors
    leftPosition: `${Math.random() * 100}vw`,
    topPosition: `${Math.random() * 300}px`, // Random vertical start position (increase rows)
  }));

  return (
    <StyledImageContainer>
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
