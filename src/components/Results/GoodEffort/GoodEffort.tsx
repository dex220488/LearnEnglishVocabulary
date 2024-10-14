import { GLOBAL_IMAGE_SRC } from "../../../constants/appConstants";
import React from "react";
import { StyledImage, StyledImageContainer } from "./GoodEffort.styles";

const GoodEffort: React.FC = () => {
  return (
    <StyledImageContainer>
      <StyledImage src={`${GLOBAL_IMAGE_SRC}good-effort.webp`} />
    </StyledImageContainer>
  );
};

export default GoodEffort;
