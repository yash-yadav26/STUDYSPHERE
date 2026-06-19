import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Students from "../pages/students/Students";
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
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
         <Route
       path="/students"
       element={<Students />} />

   

      </Routes>
      </BrowserRouter>
  );
};

export default AppRoutes;