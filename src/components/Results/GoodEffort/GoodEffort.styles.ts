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
