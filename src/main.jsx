import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/*
  ✅ Vite + React 기본 mount
  index.html 의 <div id="root"></div> 와 반드시 일치해야 함
*/

const rootEl = document.getElementById("root");

if (!rootEl) {
  console.error("❌ root element not found");
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}