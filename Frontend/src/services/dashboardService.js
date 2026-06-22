import { getStudents } from "./studentService";
import { getEnrollments } from "./enrollmentService";
import { getPayments } from "./paymentService";
import { getInvoices } from "./invoiceService";
import { getSeats } from "./seatService";

export const getDashboardData = async () => {
  const [
    studentsRes,
    enrollmentsRes,
    paymentsRes,
    invoicesRes,
    seatsRes,
  ] = await Promise.all([
    getStudents(),
    getEnrollments(),
    getPayments(),
    getInvoices(),
    getSeats(),
  ]);

  return {
    students: studentsRes.data.students || [],
    enrollments: enrollmentsRes.data.enrollments || [],
    payments: paymentsRes.data.payments || [],
    invoices: invoicesRes.data.invoices || [],
    seats: seatsRes.data.seats || [],
  };
};