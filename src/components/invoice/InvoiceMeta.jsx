import { useState } from "react";

export default function InvoiceMeta() {
  const invoiceNumber =
    "INV-" +
    new Date().getFullYear() +
    "-" +
    String(Math.floor(Math.random() * 10000)).padStart(4, "0");

  const today = new Date().toISOString().split("T")[0];

  const [invoiceDate, setInvoiceDate] = useState(today);
  const [dueDate, setDueDate] = useState(today);
  const [status, setStatus] = useState("Draft");

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="text-xl font-semibold mb-6">
        Invoice Information
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="text-sm text-gray-500">
            Invoice Number
          </label>

          <input
            value={invoiceNumber}
            readOnly
            className="w-full mt-2 rounded-lg border p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Status
          </label>

          <select
            className="w-full mt-2 rounded-lg border p-3"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Draft</option>
            <option>Pending</option>
            <option>Paid</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Invoice Date
          </label>

          <input
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            className="w-full mt-2 rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Due Date
          </label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full mt-2 rounded-lg border p-3"
          />
        </div>

      </div>
    </div>
  );
}