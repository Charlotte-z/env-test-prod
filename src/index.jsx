import React from "react";
import ReactDOM from "react-dom";
import Sub from "./sub.jsx";

const App = () => (
  <h1>
    <h2>env:</h2>
    <p>process.env.PRODUCTION: {window.PRODUCTION}</p>
    <p>process.env.VERSION: {window.VERSION}</p>
    <p>process.env.PRODUCTS: {window.PRODUCTS}</p>
    <Sub></Sub>
  </h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
