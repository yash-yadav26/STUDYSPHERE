import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import InvoiceTable from "../../components/invoices/InvoiceTable";
import { getInvoices } from "../../services/invoiceService";

export default function InvoiceManagement() {
  const navigate = useNavigate();

  const [invoices, setInvoices] = useState([]);

  const loadInvoices = async () => {
    try {
      const res = await getInvoices();
      setInvoices(res.data.invoices || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadInvoices();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Invoice Management
          </h1>

          <button
            onClick={() =>
              navigate("/invoices/create")
            }
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Generate Invoice
          </button>
        </div>

        <InvoiceTable
          invoices={invoices}
          refreshInvoices={loadInvoices}
        />
      </div>
    </DashboardLayout>
  );
}