import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { StudentProvider } from "./context/StudentContext";
import { AuthProvider } from "./context/AuthContext";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <AuthProvider>
      <StudentProvider>
        <App />
      </StudentProvider>
    </AuthProvider>
  </BrowserRouter>
);