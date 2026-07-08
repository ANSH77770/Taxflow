import { X } from "lucide-react";

export default function InvoiceViewModal({
  open,
  invoice,
  onClose,
}) {
  if (!open || !invoice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-4xl rounded-2xl bg-white shadow-xl">

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            Invoice Details
          </h2>

          <button onClick={onClose}>
            <X size={24} />
          </button>

        </div>

        <div className="space-y-6 p-6">

          <div className="grid grid-cols-2 gap-6">

            <div>

              <h3 className="font-semibold text-gray-700">
                Customer
              </h3>

              <p className="mt-2 text-lg font-bold">
                {invoice.customer}
              </p>

            </div>

            <div className="text-right">

              <h3 className="font-semibold text-gray-700">
                Invoice Date
              </h3>

              <p className="mt-2">
                {invoice.date}
              </p>

            </div>

          </div>

          <div className="rounded-xl border p-4">

            <div className="flex justify-between">

              <span>Status</span>

              <span className="font-semibold">
                {invoice.status}
              </span>

            </div>

            <div className="mt-3 flex justify-between">

              <span>Total Amount</span>

              <span className="text-xl font-bold text-blue-600">
                ₹{Number(invoice.total).toFixed(2)}
              </span>

            </div>

          </div>

          <div className="flex justify-end">

            <button
              onClick={onClose}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}