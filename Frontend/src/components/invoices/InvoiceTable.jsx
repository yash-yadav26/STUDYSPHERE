import { Eye, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { deleteInvoice } from "../../services/invoiceService";

export default function InvoiceTable({ invoices, refreshInvoices }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete Invoice?");

    if (!confirmDelete) return;

    try {
      await deleteInvoice(id);

      refreshInvoices();
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Failed to delete invoice");
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow 
       overflow-x-auto "
    >
      <table className="w-full ">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Invoice No</th>

            <th className="p-4 text-left">Amount</th>

            <th className="p-4 text-left">Date</th>

            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {invoices.length > 0 ? (
            invoices.map((invoice) => (
              <tr key={invoice._id} className="border-t">
                <td className="p-4 font-medium">{invoice.invoiceNumber}</td>

                <td className="p-4">₹{invoice.amount}</td>

                <td className="p-4">
                  {new Date(invoice.invoiceDate).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => navigate(`/invoices/${invoice._id}`)}
                    >
                      <Eye size={18} />
                    </button>

                    <button onClick={() => handleDelete(invoice._id)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-6 text-gray-500">
                No invoices found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
