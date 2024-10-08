import { useEffect, useMemo, useRef, useState } from "react";
import { Word, wordList } from "../../assets/data/data";
import { getRandomItemsFromArray } from "../../utils/utils";
import { Box } from "@mui/material";
import ResultImage from "../ImageSlider/components/AnswerImage/AnswerImage";
import React from "react";
import { STATUS_ENUM } from "../../constants";
import ImageSlider from "../ImageSlider/ImageSlider";
import Results from "../Results/Results";

const Game: React.FC = () => {
  const [answeredWords, setAnsweredWords] = useState<Word[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const startTime = useMemo(() => new Date().getTime(), []);

  const handleOnAnswer = (correctAnswer: Word, selectedWord: Word) => {
    const isSuccess = selectedWord.value === correctAnswer.value;
    setHasAnswered(true);
    setIsCorrect(isSuccess);
    setAnsweredWords((prev) => [...prev, { ...correctAnswer, wasCorrect: isSuccess }]);
  };

  const randomList = useMemo(() => {
    const answeredIds = answeredWords.map((item) => item.id);
    const filteredList: Word[] = wordList.filter((item) => !answeredIds.includes(item.id));
    return getRandomItemsFromArray(filteredList);
  }, [answeredWords]);

  useEffect(() => {
    if (hasAnswered) {
      const timeout = setTimeout(() => {
        if (isCorrect) {
          setIsCorrect(undefined);
        }

        setIsCorrect(false);
        setHasAnswered(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasAnswered]);

  const score = useMemo(() => {
    const correctAnswers = answeredWords.filter((item) => item.wasCorrect).length;
    const totalAnswers = answeredWords.length;
    return { correctAnswers, total: totalAnswers };
  }, [answeredWords]);

  const endTime = useMemo(() => {
    if (!randomList.length) {
      return new Date().getTime();
    }

    return undefined;
  }, [randomList]);

  const getDuration = (startTime: number, endTime: number) => {
    const seconds = Math.floor((endTime - startTime) / 1000);
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  const duration = useMemo(() => {
    if (startTime && endTime) {
      return getDuration(startTime, endTime);
    }
    return "00:00:00";
  }, [startTime, endTime]);

  const handleRestart = () => {
    setAnsweredWords([]);
    setIsCorrect(undefined);
    setHasAnswered(false);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyItems: "center", alignContent: "center" }}>
      {hasAnswered && randomList.length > 0 && (
        <ResultImage status={isCorrect ? STATUS_ENUM.SUCCESS : STATUS_ENUM.FAILURE} />
      )}

      {!hasAnswered && randomList.length > 0 && (
        <ImageSlider wordList={randomList} onAnswered={handleOnAnswer} />
      )}

      {!randomList.length && (
        <Results
          score={score}
          durationTime={duration}
          answers={answeredWords}
          onRestart={handleRestart}
        />
      )}
    </Box>
  );
};

export default Game;
