import { useEffect, useMemo, useRef, useState } from "react";
import { Word, wordList } from "../../assets/data/data";
import { getRandomItemsFromArray } from "../../utils/utils";
import { Box } from "@mui/material";
import ResultImage from "../ImageSlider/components/AnswerImage/AnswerImage";
import React from "react";
import { GROUP_ENUM, STATUS_ENUM } from "../../constants";
import ImageSlider from "../ImageSlider/ImageSlider";
import Results from "../Results/Results";

type GameProps = {
  selectedCategories: GROUP_ENUM[];
  wordLimit: number;
  onRestart: () => void;
};

const Game: React.FC<GameProps> = ({ selectedCategories, wordLimit, onRestart }) => {
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

  const wordsToPlay = useMemo(() => {
    return wordList
      .filter((item) => item.categories.some((cat) => selectedCategories.includes(cat)))
      .slice(0, wordLimit);
  }, [wordList]);

  const randomList = useMemo(() => {
    const answeredIds = answeredWords.map((item) => item.id);
    const filteredList: Word[] = wordsToPlay.filter((item) => !answeredIds.includes(item.id));
    return getRandomItemsFromArray(filteredList);
  }, [answeredWords, selectedCategories]);

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
    onRestart();
  };

  useEffect(() => {
    if (!randomList.length && !answeredWords.length) {
      onRestart();
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyItems: "center",
        alignContent: "center",
      }}
    >
      {hasAnswered && randomList.length > 0 && (
        <ResultImage status={isCorrect ? STATUS_ENUM.SUCCESS : STATUS_ENUM.FAILURE} />
      )}

      {!hasAnswered && randomList.length > 0 && (
        <ImageSlider
          selectedCategories={selectedCategories}
          wordList={randomList}
          onAnswered={handleOnAnswer}
        />
      )}

      {!randomList.length && answeredWords.length > 0 && (
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
