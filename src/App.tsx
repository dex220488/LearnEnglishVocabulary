import { createTheme, styled, ThemeProvider } from "@mui/material";
import React from "react";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { APP_NAME } from "./constants";
import Game from "./components/Game/Game";

const theme = createTheme({
  // Custom theme options can be defined here
});

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100dvh",
  width: "100%",
}));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <h1>{APP_NAME}</h1>
        <Game />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;
