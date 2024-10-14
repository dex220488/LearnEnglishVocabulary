import { styled } from "@mui/material";

export const StyledImageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  cursor: "pointer",
});

export const StyledImage = styled("img")(({ theme }) => ({
  width: "300px",
  height: "auto",
  animation: "celebrate 2s ease-out forwards",
  "@keyframes celebrate": {
    "0%": { transform: "scale(1) translateY(0)", opacity: 0 },
    "50%": { transform: "scale(1.3) translateY(-10px)", opacity: 1 },
    "70%": { transform: "scale(1) translateY(0)" },
    "100%": { transform: "scale(1)", opacity: 1 },
  },
}));

export const Confetti = styled("div")({
  position: "absolute",
  width: "5px",
  height: "10px",
  backgroundColor: "red",
  borderRadius: "2px",
  animation: "fall 3s ease-out infinite",
  "@keyframes fall": {
    "0%": { transform: "translateY(0) rotate(0deg)", opacity: 1 },
    "100%": { transform: "translateY(500px) rotate(360deg)", opacity: 0 },
  },
});
