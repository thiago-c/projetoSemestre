import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UsersProvider from "./Contexts/UsersProvider";
import Layout from "./Layout";
import App from "./Pages/App";
import SobreProjeto from "./Pages/SobreProjeto";
import Diplomados from "./Pages/Diplomados";
import Contato from "./Pages/Contato";
import Favoritos from "./Pages/Favoritos";
import Login from "./Pages/Login";
import Detalhe from "./Pages/Detalhe";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UsersProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/sobre-o-projeto" element={<SobreProjeto />} />
          <Route path="/diplomados" element={<Diplomados />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/detalhe/:id"
            element={<Detalhe params={useParams} />}
            exact
          />
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </UsersProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
