import React, { useMemo, useState } from "react";
import { Word, wordList } from "../../../../assets/data/data";
import {
  MultipleAnswersContainerStyled,
  MultipleAnswersStyledDiv,
  StyledOption,
  StyledSelectedOption,
  StyledSuccessSelectedOption,
} from "./MultipleAnswers.styles";
import { getRandomItemsFromArray } from "../../../../utils/utils";
import { Typography } from "@mui/material";

type MultipleAnswersProps = {
  correctAnswer: Word;
  onAnswered: (correctAnswer: Word, answeredWord: Word) => void;
};

export const MultipleAnswers: React.FC<MultipleAnswersProps> = ({ correctAnswer, onAnswered }) => {
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
    onAnswered(correctAnswer, selectedValue);
  };

  // useEffect(() => {
  //   if (hasAnswered) {
  //     const timeout = setTimeout(() => {
  //       if (isCorrect) {
  //         onSuccessfulAnswer(correctAnswer);
  //       }
  //       setIsCorrect(false);
  //       setHasAnswered(false);
  //     }, 2000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [hasAnswered]);

  return (
    <MultipleAnswersContainerStyled>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant='h3' component='h3'>
          Choose your answer:
        </Typography>
        <MultipleAnswersStyledDiv>
          {options.map((option) => {
            if (selectedAnswer === option.value) {
              if (isCorrect) {
                return (
                  <StyledSuccessSelectedOption key={option.id}>
                    <Typography variant='body1' component='body'>
                      {option.value}
                    </Typography>
                  </StyledSuccessSelectedOption>
                );
              } else {
                return <StyledSelectedOption key={option.id}>{option.value}</StyledSelectedOption>;
              }
            } else {
              return (
                <StyledOption key={option.id} onClick={() => handleChange(option)}>
                  <Typography variant='body1' component='body'>
                    {option.value}
                  </Typography>
                </StyledOption>
              );
            }
          })}
        </MultipleAnswersStyledDiv>
      </div>
    </MultipleAnswersContainerStyled>
  );
};
