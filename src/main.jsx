import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Desktop from "./Desktop.jsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n.js";
import App from "./App.jsx";

const AdminApp = lazy(() => import("./admin/AdminApp.jsx"));
const isAdminRoute = window.location.pathname.startsWith("/admin");

const ConditionalApp = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        {isWideScreen ? (
          <Desktop />
        ) : (
        <App />
        )}
      </I18nextProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  isAdminRoute ? (
    <React.StrictMode>
      <Suspense fallback={null}>
        <AdminApp />
      </Suspense>
    </React.StrictMode>
  ) : (
    <ConditionalApp />
  )
);
