import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import PaymentTable from "../../components/payments/PaymentTable";
import PaymentStats from "../../components/payments/PaymentStats";
import Pagination from "../../components/common/Pagination";

import { getPayments } from "../../services/paymentService";

export default function PaymentManagement() {
  const navigate = useNavigate();

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchPayments = async () => {
    try {
      const res = await getPayments();
      setPayments(res.data.payments || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initializePayments = async () => {
      await fetchPayments();
    };

    initializePayments();
  }, []);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentPayments = payments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                Payment Management
              </h1>

              <p className="text-slate-500 mt-2">
                Manage all payment records and transactions.
              </p>
            </div>

            <button
              onClick={() => navigate("/payments/create")}
              className="
                px-6
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                text-white
                font-semibold
                shadow-lg
                hover:scale-105
                transition-all
              "
            >
              + Add Payment
            </button>

          </div>
        </div>

        {/* Stats */}
        <PaymentStats payments={payments} />

        {/* Table */}
        {loading ? (
          <div className="bg-white p-8 rounded-2xl shadow">
            Loading Payments...
          </div>
        ) : (
          <>
            <PaymentTable
              payments={currentPayments}
              refreshPayments={fetchPayments}
            />

            <Pagination
              currentPage={currentPage}
              totalItems={payments.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}

      </div>
    </DashboardLayout>
  );
}