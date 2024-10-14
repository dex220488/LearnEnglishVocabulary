import { styled } from "@mui/material";

export const ImproveWordsContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: "5px",
});

export const ImproveWord = styled("div")({
  border: "1px solid black",
  borderRadius: "6px",
  padding: "4px",
});

export const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  "&:hover": {
    cursor: "pointer",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    gap: "100px",
  },
}));
