import { keyframes, styled } from "@mui/material";

export const MultipleAnswersStyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "10px",
}));

export const MultipleAnswersContainerStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

export const StyledOption = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px",
  width: "90%",
  backgroundColor: "white",
  "&:hover": {
    cursor: "pointer",
  },
}));

export const StyledSelectedOption = styled(StyledOption)(({ theme }) => ({
  backgroundColor: "lightblue",
}));

export const StyledSuccessSelectedOption = styled(StyledOption)(({ theme }) => ({
  backgroundColor: "green",
}));
