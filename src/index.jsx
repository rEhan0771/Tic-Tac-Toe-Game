import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
