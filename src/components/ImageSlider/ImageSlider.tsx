import { Box, styled } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Image } from './components/Image';
import { wordList } from '../../assets/data/data';
import { MultipleAnswers } from './components/MultipleAnswers/MultipleAnswers';

// Define styles and return the class names
const StyledSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

const ImageSlider: React.FC = () => {
  const [slideHasChanged, setSlideHasChanged] = useState(false);
  const swiperInstance = useRef<any>(null);
  const handleSlideChange = () => {
    setSlideHasChanged(true);
  };

  useEffect(() => {
    if (slideHasChanged && swiperInstance.current) {
      swiperInstance.current.slideNext(); // move to next slide
      setSlideHasChanged(false); // reset the state after sliding
    }
  }, [slideHasChanged]);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={false}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiperInstance.current = swiper;
        }}
      >
        {wordList.map((word, index) => {
          return (
            <StyledSwiperSlide key={index}>
              <Image word={word} />
              <MultipleAnswers
                correctAnswer={word}
                onSuccessfulAnswer={handleSlideChange}
              />
            </StyledSwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default ImageSlider;
