import { FormControlLabel, keyframes, Radio, RadioGroup, styled } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Word, wordList } from "../../../../assets/data/data";
import { GLOBAL_IMAGE_SRC } from "../../../../constants";
import {
  CongratulationStyledImage,
  MultipleAnswersContainerStyled,
  MultipleAnswersStyledDiv,
  StyledOption,
  StyledSelectedOption,
  StyledSuccessSelectedOption,
  TryAgainStyledImage,
} from "./MultipleAnswers.styles";
import { getRandomItemsFromArray } from "../../../../utils/utils";

type MultipleAnswersProps = {
  correctAnswer: Word;
  onSuccessfulAnswer: () => void;
};

export const MultipleAnswers: React.FC<MultipleAnswersProps> = ({
  correctAnswer,
  onSuccessfulAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>(""); // Initialize to an empty string
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);

  const options = useMemo(() => {
    const randomOptions = getRandomItemsFromArray(
      [...wordList].filter((item) => item.id !== correctAnswer.id),
      4
    );

    return getRandomItemsFromArray([...randomOptions, correctAnswer]);
  }, [wordList, correctAnswer]);

  const handleChange = (selectedValue: Word) => {
    const { value } = selectedValue;
    setSelectedAnswer(value);
    setIsCorrect(value === correctAnswer.value);
    setHasAnswered(true);
  };

  useEffect(() => {
    if (hasAnswered) {
      const timeout = setTimeout(() => {
        if (isCorrect) {
          onSuccessfulAnswer();
        }
        setIsCorrect(false);
        setHasAnswered(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasAnswered]);

  return (
    <MultipleAnswersContainerStyled>
      {!hasAnswered ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3>Choose the correct answer</h3>
          <MultipleAnswersStyledDiv>
            {options.map((option) => {
              if (selectedAnswer === option.value) {
                if (isCorrect) {
                  return (
                    <StyledSuccessSelectedOption key={option.id}>
                      {option.value}
                    </StyledSuccessSelectedOption>
                  );
                } else {
                  return (
                    <StyledSelectedOption key={option.id}>{option.value}</StyledSelectedOption>
                  );
                }
              } else {
                return (
                  <StyledOption key={option.id} onClick={() => handleChange(option)}>
                    {option.value}
                  </StyledOption>
                );
              }
            })}
          </MultipleAnswersStyledDiv>
        </div>
      ) : (
        <div>
          {isCorrect ? (
            <CongratulationStyledImage
              src={`${GLOBAL_IMAGE_SRC}congratulate.webp`}
              alt='Congratulations!'
            />
          ) : (
            <TryAgainStyledImage
              src={`${GLOBAL_IMAGE_SRC}try-again.webp`}
              alt='Try Again!'
              style={{ opacity: 1 }} // Always set opacity to 1
            />
          )}
        </div>
      )}
    </MultipleAnswersContainerStyled>
  );
};
