import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import { WordImage } from "./components/WordImage/WordImage";
import { Word } from "../../assets/data/data";
import { MultipleAnswers } from "./components/MultipleAnswers/MultipleAnswers";
import { StyledSwiperSlide } from "./ImageSlider.styles";

type ImageSliderProps = {
  wordList: Word[];
  onAnswered: (correctAnswer: Word, selectedWord: Word) => void;
};

const ImageSlider: React.FC<ImageSliderProps> = ({ wordList, onAnswered }) => {
  const swiperInstance = useRef<any>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);

  const handleOnAnswer = (correctAnswer: Word, selectedWord: Word) => {
    setHasAnswered(true);
    onAnswered(correctAnswer, selectedWord);
  };

  useEffect(() => {
    if (hasAnswered) {
      const timeout = setTimeout(() => {
        swiperInstance.current.slideNext();
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasAnswered]);

  return (
    <div style={{ width: "100%" }}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={false}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiperInstance.current = swiper;
        }}
      >
        {wordList.map((word, index) => (
          <StyledSwiperSlide key={index}>
            <WordImage word={word} />
            <MultipleAnswers correctAnswer={word} onAnswered={handleOnAnswer} />
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
