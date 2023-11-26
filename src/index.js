import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import { ThemeProvider } from "./context/themeContext";
import { FilterRegionProvider } from "./context/filterRegionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FilterRegionProvider>
        <App />
      </FilterRegionProvider>
    </ThemeProvider>
  </React.StrictMode>
);
