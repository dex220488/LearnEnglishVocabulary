import { styled } from "@mui/material";

export const StyledImage = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "auto",
}));

export const StyledImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));
