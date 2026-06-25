import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { StudentProvider } from "./context/StudentProvider";
import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <StudentProvider>
        <App />
 <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={12}
  toastOptions={{
    duration: 3000,
    style: {
      borderRadius: "18px",
      background: "#1e293b",
      color: "#fff",
      padding: "18px 24px",
      fontSize: "16px",
      fontWeight: "600",
      minWidth: "380px",
      maxWidth: "500px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
    },

    success: {
      style: {
        background: "#46e566",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#4F46E5",
      },
    },

    error: {
      style: {
        background: "#DC2626",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#DC2626",
      },
    },
  }}
/>
      </StudentProvider>
    </AuthProvider>
  </BrowserRouter>,
);
