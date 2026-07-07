import { Trash2 } from "lucide-react";
import { useInvoiceHistoryStore } from "../../store/useInvoiceHistoryStore";

export default function InvoiceHistory() {
  const invoices = useInvoiceHistoryStore(
    (state) => state.invoices
  );

  const deleteInvoice = useInvoiceHistoryStore(
    (state) => state.deleteInvoice
  );

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Invoices
      </h2>

      {invoices.length === 0 ? (
        <p className="text-gray-500">
          No invoices saved yet.
        </p>
      ) : (
        <table className="w-full">

          <thead>
            <tr className="border-b">

              <th className="text-left py-3">
                Customer
              </th>

              <th className="text-left">
                Date
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-right">
                Total
              </th>

              <th></th>

            </tr>
          </thead>

          <tbody>

            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b">

                <td className="py-4">
                  {invoice.customer}
                </td>

                <td>
                  {invoice.date}
                </td>

                <td>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700 text-sm">

                    {invoice.status}

                  </span>

                </td>

                <td className="text-right">

                  ₹{invoice.total.toFixed(2)}

                </td>

                <td className="text-right">

                  <button
                    onClick={() =>
                      deleteInvoice(invoice.id)
                    }
                  >
                    <Trash2
                      size={18}
                      className="text-red-500"
                    />
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>
      )}

    </div>
  );
}