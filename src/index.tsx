import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { OidcProvider } from "@axa-fr/react-oidc";

// This configuration use the ServiceWorker mode only
// "access_token" will be provided automaticaly to the urls and domains configured inside "OidcTrustedDomains.js"
const configuration = {
  client_id: process.env.REACT_APP_UE_CLIENT_ID || "",
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri:
    window.location.origin + "/authentication/silent-callback", // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  scope: "openid email username offline_access access",
  authority: process.env.REACT_APP_UE_AUTHORITY || "",
  service_worker_relative_url: "/OidcServiceWorker.js",
  service_worker_only: true,
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <OidcProvider configuration={configuration}>
      <App />
    </OidcProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
