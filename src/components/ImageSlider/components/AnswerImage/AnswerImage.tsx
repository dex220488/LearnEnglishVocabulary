import { GLOBAL_IMAGE_SRC, STATUS_ENUM } from "../../../../constants";
import {
  CongratulationStyledImage,
  StyledImageContainer,
  TryAgainStyledImage,
} from "./AnswerImage.styles";
import React, { useMemo } from "react";

type AnswerImageProps = {
  status: STATUS_ENUM;
};

const AnswerImage: React.FC<AnswerImageProps> = ({ status }) => {
  const content = useMemo(() => {
    switch (status) {
      case STATUS_ENUM.SUCCESS:
        return (
          <CongratulationStyledImage
            src={`${GLOBAL_IMAGE_SRC}congratulate.webp`}
            alt='Congratulations!'
          />
        );

      case STATUS_ENUM.FAILURE:
        return (
          <TryAgainStyledImage
            src={`${GLOBAL_IMAGE_SRC}try-again.webp`}
            alt='Try Again!'
            style={{ opacity: 1 }} // Always set opacity to 1
          />
        );
    }
  }, []);

  return <StyledImageContainer>{content}</StyledImageContainer>;
};

export default AnswerImage;
