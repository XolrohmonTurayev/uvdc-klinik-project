import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Routers from "./Routers/Routers.jsx";
import "/src/components/Language/i18n";
import ModalProvider from "./context/ModalContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <Routers />
  </ModalProvider>
);
