import {
  Box,
  Checkbox,
  createTheme,
  FormControlLabel,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { APP_NAME, GROUP_ENUM } from "./constants";
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
  height: "100%",
  width: "100%",
  textAlign: "center",
}));

export const StyledButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px",
  width: "90%",
  backgroundColor: "green",
  color: "white",
  "&:hover": {
    cursor: "pointer",
  },
}));

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<GROUP_ENUM[]>([]);
  const [isAllOption, setIsAllOption] = useState(false);

  const handleOptionToggle = (category: GROUP_ENUM) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((cat) => cat !== category) // Remove if already selected
          : [...prev, category] // Add if not selected
    );
  };

  const handleCheckAllOptions = () => {
    const toggleValue = !isAllOption;

    if (!toggleValue) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(Object.values(GROUP_ENUM));
    }

    setIsAllOption(toggleValue);
  };

  const handleStart = () => {
    if (!selectedCategories.length) {
      return;
    }

    setStartGame(true);
  };

  const handleRestart = () => {
    setSelectedCategories([]);
    setIsAllOption(false);
    setStartGame(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "calc(100vh - 20px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Typography
          variant='h1'
          component='h1'
          style={{
            display: "flex", // Flex for centering text if needed
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {APP_NAME}
        </Typography>

        {startGame ? (
          <StyledContainer>
            <Game selectedCategories={selectedCategories} onRestart={handleRestart} />
          </StyledContainer>
        ) : (
          <StyledContainer>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='flex-start'
            >
              {Object.values(GROUP_ENUM).map((item) => (
                <FormControlLabel
                  key={item}
                  control={
                    <Checkbox
                      checked={selectedCategories.includes(item)}
                      onChange={() => handleOptionToggle(item)}
                    />
                  }
                  label={
                    <Typography variant='body1' component='p'>
                      {item}
                    </Typography>
                  }
                />
              ))}
              <FormControlLabel
                key={"all"}
                control={<Checkbox checked={isAllOption} onChange={handleCheckAllOptions} />}
                label={
                  <Typography variant='body1' component='p'>
                    All
                  </Typography>
                }
              />
            </Box>

            <StyledButton onClick={handleStart}>
              <Typography variant='h4' component='h4'>
                Start
              </Typography>
            </StyledButton>
          </StyledContainer>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
