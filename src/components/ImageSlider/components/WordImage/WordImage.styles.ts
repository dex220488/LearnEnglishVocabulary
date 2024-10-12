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
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export const StyledInfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  backgroundColor: "rgba(129, 212, 250, 0.7)",
  color: "black",
  borderRadius: "8px",
  padding: "10px 14px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
}));

export const StyledHintBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  backgroundColor: "rgba(200, 230, 201, 0.9)",
  gap: "8px",
  borderRadius: "8px",
  padding: "10px 14px",
  color: "#2E2E2E",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
  border: "1px dashed rgba(165, 214, 167, 0.8)",
  cursor: "pointer",
}));
