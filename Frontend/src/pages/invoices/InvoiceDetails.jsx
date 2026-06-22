import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import { getInvoiceById } from "../../services/invoiceService";

export default function InvoiceDetails() {
  const { id } = useParams();

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    loadInvoice();
  }, []);

  const loadInvoice = async () => {
    const res = await getInvoiceById(id);
    setInvoice(res.data.invoice);
  };

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6">
          Invoice Details
        </h1>

        <div className="space-y-3">
          <p>
            Invoice No:
            {" "}
            {invoice.invoiceNumber}
          </p>

          <p>
            Amount:
            {" "}
            ₹{invoice.amount}
          </p>

          <p>
            Payment ID:
            {" "}
            {invoice.paymentId?._id}
          </p>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="px-4 py-2 border rounded-lg">
            Print
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Download PDF
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}