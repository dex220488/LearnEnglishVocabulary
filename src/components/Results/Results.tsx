import { useMemo } from "react";
import { Word } from "../../assets/data/data";
import { ImproveWord, ImproveWordsContainer, StyledContainer } from "./Results.styles";
import React from "react";
import Trophy from "./Trophy/Trophy";

type ResultsProps = {
  score: { correctAnswers: number; total: number };
  durationTime: string;
  answers: Word[];
};

const Results: React.FC<ResultsProps> = ({ score, durationTime, answers }) => {
  const { correctAnswers, total } = score;
  const percentage = (correctAnswers / total) * 100;

  const wordsToImprove = useMemo(() => {
    const words = answers.filter((item) => !item.wasCorrect);
    return words.length > 0 ? (
      <StyledContainer>
        <p>Words to improve:</p>
        <ImproveWordsContainer>
          {words.map((item) => (
            <ImproveWord key={item.id}>{item.value}</ImproveWord>
          ))}
        </ImproveWordsContainer>
      </StyledContainer>
    ) : null;
  }, [answers]);

  const renderResult = (
    <div>
      <p>You have completed the game!</p>
      <div>
        <p>Score: {`${correctAnswers}/${total}`}</p>
        <p>Time: {durationTime}</p>
        {wordsToImprove}
      </div>
    </div>
  );

  return (
    <StyledContainer>
      {percentage < 70 ? (
        <h2>{"Good effort!"}</h2>
      ) : (
        <>
          <Trophy />
          <h2>{"Congratulations!"}</h2>
        </>
      )}

      {renderResult}
    </StyledContainer>
  );
};

export default Results;
