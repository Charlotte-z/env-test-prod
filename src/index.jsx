import React from "react";
import ReactDOM from "react-dom";
import Sub from "./sub.jsx";

const App = () => (
  <h1>
    thisis{window.PRODUCTION}
    <Sub></Sub>
  </h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
