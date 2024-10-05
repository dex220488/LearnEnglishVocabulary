import { createTheme, styled, ThemeProvider } from "@mui/material";
import React from "react";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { APP_NAME } from "./constants";

const theme = createTheme({
  // Custom theme options can be defined here
});

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  back,
}));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <h1>{APP_NAME}</h1>
        <ImageSlider />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;
