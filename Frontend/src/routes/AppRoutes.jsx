import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>
         <Route 
         path="/register" 
         element={<Register />} 
         />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/"
          element={
           
              <Dashboard />
           
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;