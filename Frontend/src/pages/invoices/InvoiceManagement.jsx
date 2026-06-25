import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import InvoiceTable from "../../components/invoices/InvoiceTable";
import Pagination from "../../components/common/Pagination";

import { getInvoices } from "../../services/invoiceService";

export default function InvoiceManagement() {
  const navigate = useNavigate();

  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchInvoices = async () => {
    try {
      const res = await getInvoices();
      setInvoices(res.data.invoices || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadInvoices = async () => {
      await fetchInvoices();
    };

    loadInvoices();
  }, []);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentInvoices = invoices.slice(
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
                Invoice Management
              </h1>

              <p className="text-slate-500 mt-2">
                Manage all generated invoices and billing records.
              </p>
            </div>

            <button
              onClick={() => navigate("/invoices/create")}
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
              + Generate Invoice
            </button>

          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="bg-white p-8 rounded-2xl shadow">
            Loading Invoices...
          </div>
        ) : (
          <>
            <InvoiceTable
              invoices={currentInvoices}
              refreshInvoices={fetchInvoices}
            />

            <Pagination
              currentPage={currentPage}
              totalItems={invoices.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}

      </div>
    </DashboardLayout>
  );
}