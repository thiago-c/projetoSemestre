import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import App from "./Pages/App";
import SobreProjeto from "./Pages/SobreProjeto";
import Diplomados from "./Pages/Diplomados";
import Contato from "./Pages/Contato";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App/>} />
        <Route path="/sobre-o-projeto" element={<SobreProjeto />} />
        <Route path="/diplomados" element={<Diplomados />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
