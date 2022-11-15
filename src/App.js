import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/styles/theme";
import "./App.css";
import Application from "./components/Application";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Application />
    </ThemeProvider>
  );
}
