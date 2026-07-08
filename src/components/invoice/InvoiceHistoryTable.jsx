import InvoiceHistoryRow from "./InvoiceHistoryRow";

export default function InvoiceHistoryTable({
  invoices,
  onView,
  onEdit,
  onDownload,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
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

            <th className="text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {invoices.length > 0 ? (

            invoices.map((invoice) => (

              <InvoiceHistoryRow
                key={invoice.id}
                invoice={invoice}
                onView={onView}
                onEdit={onEdit}
                onDownload={onDownload}
                onDelete={onDelete}
              />

            ))

          ) : (

            <tr>

              <td
                colSpan={5}
                className="py-10 text-center text-gray-500"
              >
                No invoices found.
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}