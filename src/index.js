//first file to be initialized
import React from "react"; //Can omit this
import ReactDOM from "react-dom/client";
import App from "./App"; //omit .js if a javascript file

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //Strict mode is a "Helper" that gives warnings about depreacted methods, potential risks (also runs functions twice)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
