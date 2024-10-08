import { GLOBAL_IMAGE_SRC } from "../../../constants/appConstants";
import React from "react";
import { StyledImage, StyledImageContainer } from "./GoodEffort.styles";

type GoodEffortProps = {
  onClick: () => void;
};

const GoodEffort: React.FC<GoodEffortProps> = ({ onClick }) => {
  return (
    <StyledImageContainer onClick={onClick}>
      <StyledImage src={`${GLOBAL_IMAGE_SRC}good-effort.webp`} />
    </StyledImageContainer>
  );
};

export default GoodEffort;
