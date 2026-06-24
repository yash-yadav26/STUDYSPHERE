import { Routes, Route, Navigate } from "react-router-dom";

import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "./protectedRoute";

import StudentsList from "../pages/students/StudentsList";
import AddStudent from "../pages/students/AddStudent";
import EditStudent from "../pages/students/EditStudent";
import StudentDetails from "../pages/students/StudentDetails";

import EnrollmentsList from "../pages/enrollment/EnrollmentsList";
import EnrollmentDetails from "../pages/enrollment/EnrollmentDetails";



import SeatManagement from "../pages/seats/SeatManagement";
import AddSeat from "../pages/seats/AddSeat";
import EditSeat from "../pages/seats/EditSeat";

import PaymentManagement from "../pages/payments/PaymentManagement";
import PaymentDetails from "../pages/payments/PaymentDetails";
import CreatePayment from "../pages/payments/CreatePayment";

import InvoiceManagement from "../pages/invoices/InvoiceManagement";
import InvoiceDetails from "../pages/invoices/InvoiceDetails";
import CreateInvoice from "../pages/invoices/CreatInvoice";

import Reports from "../pages/reports/Reports";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}

<Route path="/" element={<Navigate to="/register" replace />} />

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />


      {/* Protected Routes */}



      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      {/* Students */}

      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <StudentsList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students/add"
        element={
          <ProtectedRoute>
            <AddStudent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students/edit/:id"
        element={
          <ProtectedRoute>
            <EditStudent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students/:id"
        element={
          <ProtectedRoute>
            <StudentDetails />
          </ProtectedRoute>
        }
      />

      {/* Enrollments */}

      <Route
        path="/enrollments"
        element={
          <ProtectedRoute>
            <EnrollmentsList />
          </ProtectedRoute>
        }
      />

      

      <Route
        path="/enrollments/:id"
        element={
          <ProtectedRoute>
            <EnrollmentDetails />
          </ProtectedRoute>
        }
      />


      {/* Seats */}

      <Route
        path="/seats"
        element={
          <ProtectedRoute>
            <SeatManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/seats/add"
        element={
          <ProtectedRoute>
            <AddSeat />
          </ProtectedRoute>
        }
      />

      <Route
        path="/seats/edit/:id"
        element={
          <ProtectedRoute>
            <EditSeat />
          </ProtectedRoute>
        }
      />

      {/* Payments */}

      <Route
        path="/payments"
        element={
          <ProtectedRoute>
            <PaymentManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payments/create"
        element={
          <ProtectedRoute>
            <CreatePayment />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payments/:id"
        element={
          <ProtectedRoute>
            <PaymentDetails />
          </ProtectedRoute>
        }
      />

      {/* Invoices */}

      <Route
        path="/invoices"
        element={
          <ProtectedRoute>
            <InvoiceManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/invoices/create"
        element={
          <ProtectedRoute>
            <CreateInvoice />
          </ProtectedRoute>
        }
      />

      <Route
        path="/invoices/:id"
        element={
          <ProtectedRoute>
            <InvoiceDetails />
          </ProtectedRoute>
        }
      />

      {/* Reports */}

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}

<Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
};

export default AppRoutes;
