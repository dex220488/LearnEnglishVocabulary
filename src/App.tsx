import {
  Alert,
  createTheme,
  FormControlLabel,
  Input,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
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
      fontFamily: "'Kanit', sans-serif", // Font for h4
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: "'Kanit', sans-serif", // Font for h5
      fontWeight: 450,
      fontSize: "1.1rem",
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    body2: {
      fontFamily: "'Kanit', sans-serif", // Font for h5
      fontWeight: 400,
      fontSize: "1.1rem",
      lineHeight: 1.4,
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
  gap: "50px",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "200px",
  },
}));

const OptionsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "10px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
  "@media (max-height: 500px)": {
    maxHeight: "300px",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "10px",
    boxSizing: "border-box",
  },
}));

export const StyledButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px",
  width: "100%",
  backgroundColor: "green",
  color: "white",
  "&:hover": {
    cursor: "pointer",
  },
  [theme.breakpoints.up("sm")]: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
  },
}));

export const StyledOption = styled("button")<{
  isSelected: boolean; // Declare isSelected inline
}>(({ isSelected }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px",
  width: "100%",
  backgroundColor: isSelected ? "lightblue" : "white",
  "&:hover": {
    backgroundColor: "lightblue",
    cursor: "pointer",
  },
}));

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<GROUP_ENUM[]>([]);
  const [isAllOption, setIsAllOption] = useState(false);
  const [wordLimit, setWordLimit] = useState("20");
  const [open, setOpen] = useState(false);

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
      setOpen(true);
      return;
    }

    setStartGame(true);
  };

  const handleRestart = () => {
    setSelectedCategories([]);
    setIsAllOption(false);
    setStartGame(false);
  };

  const handleWordLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Allow the input to be empty
    if (inputValue === "") {
      setWordLimit("");
      return;
    }

    const newValue = Number(inputValue);
    console.log({ newValue });

    // Validate that the new value is a number
    if (isNaN(newValue)) {
      return;
    }

    // Set minimum and maximum limits
    const clampedValue = Math.max(1, Math.min(newValue, 50));
    setWordLimit(clampedValue.toString());
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {APP_NAME}
        </Typography>

        {startGame ? (
          <StyledContainer>
            <Game
              selectedCategories={selectedCategories}
              onRestart={handleRestart}
              wordLimit={wordLimit}
            />
          </StyledContainer>
        ) : (
          <StyledContainer>
            <OptionsContainer>
              <StyledOption key='all' onClick={handleCheckAllOptions} isSelected={isAllOption}>
                <Typography variant='body1' component='body'>
                  {"All"}
                </Typography>
              </StyledOption>

              {Object.values(GROUP_ENUM).map((item) => (
                <StyledOption
                  key={item}
                  onClick={() => handleOptionToggle(item)}
                  isSelected={selectedCategories.includes(item)}
                >
                  <Typography variant='body1' component='body'>
                    {item}
                  </Typography>
                </StyledOption>
              ))}

              <FormControlLabel
                key={"limitWords"}
                control={
                  <Input
                    value={wordLimit}
                    type='number'
                    onChange={handleWordLimitChange}
                    inputProps={{ min: 1, max: 99 }}
                    sx={{ marginLeft: 2 }}
                  />
                }
                label={
                  <Typography variant='body1' component='p'>
                    Limit Words:
                  </Typography>
                }
                labelPlacement='start'
                sx={{ marginLeft: 0 }}
              />
            </OptionsContainer>

            <StyledButton onClick={handleStart}>
              <Typography variant='h4' component='h4'>
                Start
              </Typography>
            </StyledButton>

            <Snackbar
              open={open}
              autoHideDuration={6000}
              message=''
              anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
              onClose={() => setOpen(false)}
            >
              <Alert severity='error' variant='filled' sx={{ width: "100%" }}>
                Select an option from the list
              </Alert>
            </Snackbar>
          </StyledContainer>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
