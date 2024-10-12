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
  flexDirection: "column",
  gap: "6px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  cursor: "pointer",
}));

export const StyledInfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "white",
  backgroundColor: "rgba(33, 150, 243, 0.5)",
  borderRadius: "8px",
  padding: "10px 14px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));
