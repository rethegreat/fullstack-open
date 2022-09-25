import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

axios.get("http://localhost:3001/persons").then((response) => {
  const intialPersons = response.data;
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App intialPersons={intialPersons} />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
