import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>
);
