import { Eye, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { deleteInvoice } from "../../services/invoiceService";

export default function InvoiceTable({
  invoices,
  refreshInvoices,
}) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Invoice?"))
      return;

    await deleteInvoice(id);

    refreshInvoices();
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">
              Invoice Number
            </th>
            <th className="p-4">
              Amount
            </th>
            <th className="p-4">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <tr
              key={invoice._id}
              className="border-t"
            >
              <td className="p-4">
                {invoice.invoiceNumber}
              </td>

              <td className="p-4">
                ₹{invoice.amount}
              </td>

              <td className="p-4 flex gap-3">
                <button
                  onClick={() =>
                    navigate(
                      `/invoices/${invoice._id}`
                    )
                  }
                >
                  <Eye size={18} />
                </button>

                <button
                  onClick={() =>
                    handleDelete(invoice._id)
                  }
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}