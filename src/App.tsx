import { createTheme, styled, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { APP_NAME } from "./constants";
import Game from "./components/Game/Game";

const theme = createTheme({
  typography: {
    fontFamily: "'Kanit', sans-serif", // Global font for everything
    h1: {
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Kanit', sans-serif", // Font for h2
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Kanit', sans-serif", // Font for h3
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: "'Kanit', sans-serif", // Font for h3
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: "'Kanit', sans-serif", // Font for paragraphs
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
});

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100vh",
  width: "100%",
  textAlign: "center",
}));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant='h1'
        component='h1'
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {APP_NAME}
      </Typography>
      <StyledContainer>
        <Game />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;
