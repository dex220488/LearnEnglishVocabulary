import { keyframes, styled } from "@mui/material";

const bounceAnimation = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  25% { transform: translateY(-10px); opacity: 1; }
  50% { transform: translateY(0) ; opacity: 1; }
  75% { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0; }
`;

const tiltAnimation = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  25% { transform: translateX(-5px); opacity: 1; }
  50% { transform: translateX(5px); opacity: 1; }
  75% { transform: translateX(-5px); opacity: 1; }
  80% { transform: translateX(0); } // Start hold
  90% { transform: translateX(0); } // Continue hold
  100% { transform: translateX(0); opacity: 0; } // Fade out
`;

const StyledImage = styled("img")(({ theme }) => ({
  width: "300px",
  height: "auto",
  [theme.breakpoints.up("sm")]: {
    width: "60%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "contain",
  },
}));

export const CongratulationStyledImage = styled(StyledImage)(({ theme }) => ({
  animation: `${bounceAnimation} 3s forwards`,
}));

export const TryAgainStyledImage = styled(StyledImage)(({ theme }) => ({
  animation: `${tiltAnimation} 3s forwards`,
}));

export const StyledImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  height: "100dvh",
  [theme.breakpoints.up("sm")]: {
    marginTop: "100px",
  },
}));
