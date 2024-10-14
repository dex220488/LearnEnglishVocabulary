import { styled } from "@mui/material";
import { SwiperSlide } from "swiper/react";

export const StyledSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
