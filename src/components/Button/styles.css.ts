import { style } from "@vanilla-extract/css";

export const button = style({
  backgroundColor: "#FF5774",
  color: "white",
  border: "none",
  padding: " 16px 32px 16px 32px",
  fontSize: 20,
  fontWeight: 700,
  borderRadius: 90,
  cursor: "pointer",
  transition: "background-color 0.3s",

  ":hover": {
    backgroundColor: "#005bb5",
  },
});
