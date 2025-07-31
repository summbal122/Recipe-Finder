import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const path = document.getElementById("root");
const root = createRoot(path);
root.render(<App />)