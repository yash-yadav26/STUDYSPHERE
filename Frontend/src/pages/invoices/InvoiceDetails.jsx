import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import { getInvoiceById } from "../../services/invoiceService";

export default function InvoiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadInvoice = async () => {
    try {
      const res = await getInvoiceById(id);

      setInvoice(res.data.invoice);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
loadInvoice();
}, [id]);
  if (loading) {
    return (
      <DashboardLayout>
        <div className="bg-white rounded-xl shadow p-6">
          Loading Invoice...
        </div>
      </DashboardLayout>
    );
  }

  if (!invoice) {
    return (
      <DashboardLayout>
        <div className="bg-white rounded-xl shadow p-6">
          Invoice Not Found
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Invoice Details
          </h1>

          <button
            onClick={() =>
              navigate("/invoices")
            }
            className="px-4 py-2 bg-slate-700 text-white rounded-lg"
          >
            Back
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500">
                Invoice Number
              </p>

              <p className="font-semibold text-lg">
                {invoice.invoiceNumber}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Amount
              </p>

              <p className="font-semibold text-lg">
                ₹{invoice.amount}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Invoice Date
              </p>

              <p>
                {new Date(
                  invoice.invoiceDate
                ).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Payment ID
              </p>

              <p>
                {invoice.paymentId?._id}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Transaction ID
              </p>

              <p>
                {
                  invoice.paymentId
                    ?.transactionId
                }
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Payment Status
              </p>

              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                {
                  invoice.paymentId
                    ?.paymentStatus
                }
              </span>
            </div>

          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() =>
                window.print()
              }
              className="px-4 py-2 border rounded-lg"
            >
              Print
            </button>

            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}