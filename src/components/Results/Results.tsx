import { useMemo } from "react";
import { Word } from "../../assets/data/data";
import { ImproveWord, ImproveWordsContainer, StyledContainer } from "./Results.styles";
import React from "react";
import Trophy from "./Trophy/Trophy";
import GoodEffort from "./GoodEffort/GoodEffort";
import { Typography } from "@mui/material";

type ResultsProps = {
  score: { correctAnswers: number; total: number };
  durationTime: string;
  answers: Word[];
  onRestart: () => void;
};

const Results: React.FC<ResultsProps> = ({ score, durationTime, answers, onRestart }) => {
  const { correctAnswers, total } = score;
  const percentage = (correctAnswers / total) * 100;

  const wordsToImprove = useMemo(() => {
    const words = answers.filter((item) => !item.wasCorrect);
    return words.length > 0 ? (
      <StyledContainer>
        <Typography variant='h4' component='h4'>
          Words to improve:
        </Typography>
        <ImproveWordsContainer>
          {words.map((item) => (
            <Typography variant='body1' component='body'>
              <ImproveWord key={item.id}>{item.value}</ImproveWord>
            </Typography>
          ))}
        </ImproveWordsContainer>
      </StyledContainer>
    ) : null;
  }, [answers]);

  const renderResult = (
    <div>
      <Typography variant='h3' component='h3'>
        Game completed!
      </Typography>
      <div>
        <Typography variant='h4' component='h4'>
          Score:
        </Typography>
        <Typography variant='body1' component='body'>
          {`${correctAnswers}/${total}`}
        </Typography>
        <Typography variant='h4' component='h4'>
          Time:
        </Typography>
        <Typography variant='body1' component='body'>
          {durationTime}
        </Typography>
        {wordsToImprove}
      </div>
    </div>
  );

  return (
    <StyledContainer>
      {percentage < 70 ? (
        <>
          <GoodEffort onClick={onRestart} />
          <Typography variant='h2' component='h2'>
            {"Good effort!"}
          </Typography>
        </>
      ) : (
        <>
          <Trophy onClick={onRestart} />
          <Typography variant='h2' component='h2'>
            {"Congratulations!"}
          </Typography>
        </>
      )}

      {renderResult}
    </StyledContainer>
  );
};

export default Results;
