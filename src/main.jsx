import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// PHP 랜딩에 있는 mount 지점
const el = document.getElementById("order-app");

// 안전장치
if (el) {
  const mcode = el.dataset.mcode;

  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <App mcode={mcode} />
    </React.StrictMode>
  );
}