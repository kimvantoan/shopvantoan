import { createRoot } from "react-dom/client";
import "./index.css";
import {  RouterProvider } from "react-router";
import { router } from "./routes/router";
import { GoogleOAuthProvider } from '@react-oauth/google';
createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
  
);
