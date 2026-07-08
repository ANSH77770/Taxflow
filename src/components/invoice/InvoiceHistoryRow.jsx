import {
  Eye,
  Download,
  Trash2,
  Pencil,
} from "lucide-react";

export default function InvoiceHistoryRow({
  invoice,
  onView,
  onEdit,
  onDownload,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="py-4">
        {invoice.customer}
      </td>

      <td>
        {invoice.date}
      </td>

      <td>
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            invoice.status === "Paid"
              ? "bg-green-100 text-green-700"
              : invoice.status === "Generated"
              ? "bg-blue-100 text-blue-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {invoice.status}
        </span>
      </td>

      <td className="text-right">
        ₹{Number(invoice.total).toFixed(2)}
      </td>

      <td>

        <div className="flex justify-center gap-2">

          <button
            onClick={() => onView(invoice)}
            className="rounded p-2 hover:bg-blue-100"
            title="View"
          >
            <Eye
              size={18}
              className="text-blue-600"
            />
          </button>

          <button
            onClick={() => onEdit(invoice)}
            className="rounded p-2 hover:bg-yellow-100"
            title="Edit"
          >
            <Pencil
              size={18}
              className="text-yellow-600"
            />
          </button>

          <button
            onClick={() => onDownload(invoice)}
            className="rounded p-2 hover:bg-green-100"
            title="Download PDF"
          >
            <Download
              size={18}
              className="text-green-600"
            />
          </button>

          <button
            onClick={() => onDelete(invoice)}
            className="rounded p-2 hover:bg-red-100"
            title="Delete"
          >
            <Trash2
              size={18}
              className="text-red-600"
            />
          </button>

        </div>

      </td>

    </tr>
  );
}