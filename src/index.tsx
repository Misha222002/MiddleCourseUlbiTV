import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
